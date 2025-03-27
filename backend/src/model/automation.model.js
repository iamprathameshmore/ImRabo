import mongoose from 'mongoose';

const AutomationSchema = new mongoose.Schema({
  automationName: { type: String, required: true },
  triggerEvent: { type: String, required: true },
  actions: [{ type: String, required: true }],
  isEnabled: { type: Boolean, default: true },
});

AutomationSchema.index({ automationName: 1, triggerEvent: 1 }, { unique: true });

const AutomationModel = mongoose.model('Automation', AutomationSchema);

export default AutomationModel;
