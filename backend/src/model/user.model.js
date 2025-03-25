import mongoose from 'mongoose';

const DeviceSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  deviceType: { type: String, required: true },
  lastUsed: { type: Date, default: Date.now },
  ipAddress: { type: String },
  location: { type: String },
  isTrusted: { type: Boolean, default: false },
});

const IntegrationSchema = new mongoose.Schema({
  integrationName: { type: String, required: true },
  apiKey: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  connectedAt: { type: Date, default: Date.now },
});

const AutomationSchema = new mongoose.Schema({
  automationName: { type: String, required: true },
  triggerEvent: { type: String, required: true },
  actions: [{ type: String, required: true }],
  isEnabled: { type: Boolean, default: true },
});

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    secret: String,
    phoneNumber: String,
    devices: [DeviceSchema],
    integrations: [IntegrationSchema],
    automations: [AutomationSchema],
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
