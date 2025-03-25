import UserModel from '../model/user.model.js'; // Import the User model
import { validationResult } from 'express-validator';

// 📌 Create (POST) Integration
export async function postIntegrationController(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { userId, integrationName, apiKey } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const newIntegration = {
      integrationName,
      apiKey,
      isActive: true,
      connectedAt: new Date(),
    };

    user.integrations.push(newIntegration);
    await user.save();

    res.status(201).json({
      msg: 'Integration added successfully',
      integration: newIntegration,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}

// 📌 Read (GET) Integrations
export async function getIntegrationController(req, res) {
  const { userId } = req.params;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json({ integrations: user.integrations });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}

// 📌 Update (PUT) Integration
export async function putIntegrationController(req, res) {
  const { userId, integrationId } = req.params;
  const { integrationName, apiKey, isActive } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const integration = user.integrations.id(integrationId);
    if (!integration)
      return res.status(404).json({ msg: 'Integration not found' });

    if (integrationName) integration.integrationName = integrationName;
    if (apiKey) integration.apiKey = apiKey;
    if (typeof isActive === 'boolean') integration.isActive = isActive;

    await user.save();

    res.json({ msg: 'Integration updated successfully', integration });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}

// 📌 Delete (DELETE) Integration
export async function deleteIntegrationController(req, res) {
  const { userId, integrationId } = req.params;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.integrations = user.integrations.filter(
      (i) => i._id.toString() !== integrationId
    );
    await user.save();

    res.json({ msg: 'Integration deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}
