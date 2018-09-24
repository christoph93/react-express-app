import mongoose from 'mongoose';

const apiConfigSchema = new mongoose.Schema({
  apiKey: String
});

export default db.model('apiConfigModels', apiConfigSchema);
