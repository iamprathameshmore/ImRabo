import AutomationModel from "../model/automation.model.js";
import UserModel from "../model/user.model.js";
import { validationResult } from "express-validator";

export async function postAutomationController(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { automationName, triggerEvent, actions } = req.body;
  const userId = req.userId; // Extracted from JWT middleware

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Check for duplicate automation
    const existingAutomation = await AutomationModel.findOne({ userId, automationName, triggerEvent });
    if (existingAutomation) return res.status(400).json({ msg: "Automation already exists" });

    // Create and save automation
    const newAutomation = await AutomationModel.create({ userId, automationName, triggerEvent, actions });

    // Push automation reference to user model
    user.automations.push(newAutomation._id);
    await user.save();

    res.status(201).json({ msg: "Automation created successfully", automation: newAutomation });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
}


// 📌 Read (GET) Automations
export async function getAutomationsController(req, res) {
  const userId = req.userId;

  try {
    const automations = await AutomationModel.find({ userId });
    res.json({ automations });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
}


// 📌 Read (GET) Single Automation by ID
export async function getAutomationByIdController(req, res) {
  const userId = req.userId;
  const { automationId } = req.params;

  try {
    const automation = await AutomationModel.findOne({ _id: automationId, userId });
    if (!automation) return res.status(404).json({ msg: "Automation not found" });

    res.json({ automation });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
}


// 📌 Update (PUT) Automation
export async function putAutomationController(req, res) {
  const userId = req.userId;
  const { automationId } = req.params;
  const { automationName, triggerEvent, actions, isEnabled } = req.body;

  try {
    const automation = await AutomationModel.findOne({ _id: automationId, userId });
    if (!automation) return res.status(404).json({ msg: "Automation not found" });

    // Prevent duplicate automationName & triggerEvent updates
    const duplicate = await AutomationModel.findOne({
      userId,
      automationName,
      triggerEvent,
      _id: { $ne: automationId },
    });
    if (duplicate) return res.status(400).json({ msg: "Automation with this name and trigger event already exists" });

    if (automationName) automation.automationName = automationName;
    if (triggerEvent) automation.triggerEvent = triggerEvent;
    if (actions) automation.actions = actions;
    if (typeof isEnabled === "boolean") automation.isEnabled = isEnabled;

    await automation.save();
    res.json({ msg: "Automation updated successfully", automation });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
}


// 📌 Delete (DELETE) Automation
export async function deleteAutomationController(req, res) {
  const userId = req.userId;
  const { automationId } = req.params;

  try {
    const automation = await AutomationModel.findOneAndDelete({ _id: automationId, userId });
    if (!automation) return res.status(404).json({ msg: "Automation not found" });

    // Remove automation reference from user model
    await UserModel.findByIdAndUpdate(userId, { $pull: { automations: automationId } });

    res.json({ msg: "Automation deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
}

