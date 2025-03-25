import UserModel from '../model/user.model.js'; // Import the User model
import { validationResult } from 'express-validator';

// 📌 Create (POST) Device
export async function postDeviceController(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { userId, deviceId, deviceType, ipAddress, location } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const newDevice = {
      deviceId,
      deviceType,
      lastUsed: new Date(),
      ipAddress,
      location,
      isTrusted: false,
    };

    user.devices.push(newDevice);
    await user.save();

    res
      .status(201)
      .json({ msg: 'Device added successfully', device: newDevice });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}

// 📌 Read (GET) Devices
export async function getDeviceController(req, res) {
  const { userId } = req.params;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json({ devices: user.devices });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}

// 📌 Update (PUT) Device
export async function putDeviceController(req, res) {
  const { userId, deviceId } = req.params;
  const { deviceType, ipAddress, location, isTrusted } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const device = user.devices.id(deviceId);
    if (!device) return res.status(404).json({ msg: 'Device not found' });

    if (deviceType) device.deviceType = deviceType;
    if (ipAddress) device.ipAddress = ipAddress;
    if (location) device.location = location;
    if (typeof isTrusted === 'boolean') device.isTrusted = isTrusted;

    await user.save();

    res.json({ msg: 'Device updated successfully', device });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}

// 📌 Delete (DELETE) Device
export async function deleteDeviceController(req, res) {
  const { userId, deviceId } = req.params;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.devices = user.devices.filter((d) => d._id.toString() !== deviceId);
    await user.save();

    res.json({ msg: 'Device deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error: error.message });
  }
}
