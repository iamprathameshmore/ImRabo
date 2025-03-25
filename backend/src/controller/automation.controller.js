import UserModel from '../model/user.model.js'; // Import the User model
import { validationResult } from 'express-validator';

// 📌 Create (POST) Automation
export async function postAutomationController(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { userId, automationName, triggerEvent, actions } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const newAutomation = {
      automationName,
      triggerEvent,
      actions,
      isEnabled: true,
    };

    user.automations.push(newAutomation);
    await user.save();

    res.status(201).json({
      msg: 'Automation created successfully',
      automation: newAutomation,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}

// 📌 Read (GET) Automation(s)
export async function getAutomationController(req, res) {
  const { userId } = req.params;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json({ automations: user.automations });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}

// 📌 Update (PUT) Automation
export async function putAutomationController(req, res) {
  const { userId, automationId } = req.params;
  const { automationName, triggerEvent, actions, isEnabled } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const automation = user.automations.id(automationId);
    if (!automation)
      return res.status(404).json({ msg: 'Automation not found' });

    if (automationName) automation.automationName = automationName;
    if (triggerEvent) automation.triggerEvent = triggerEvent;
    if (actions) automation.actions = actions;
    if (typeof isEnabled === 'boolean') automation.isEnabled = isEnabled;

    await user.save();

    res.json({ msg: 'Automation updated successfully', automation });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}

// 📌 Delete (DELETE) Automation
export async function deleteAutomationController(req, res) {
  const { userId, automationId } = req.params;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.automations = user.automations.filter(
      (a) => a._id.toString() !== automationId
    );
    await user.save();

    res.json({ msg: 'Automation deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}
