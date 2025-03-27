import mongoose from 'mongoose';

const IntegrationSchema = new mongoose.Schema({
  integrationName: { type: String, required: true }, 
  apiKey: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  connectedAt: { type: Date, default: Date.now },
});

// ✅ Create Index for Uniqueness
IntegrationSchema.index({ integrationName: 1, apiKey: 1 }, { unique: true });

const IntegrationModel = mongoose.model('Integration', IntegrationSchema);

export default IntegrationModel;
