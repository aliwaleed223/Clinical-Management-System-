import mongoose from 'mongoose';

const drugListPharmicySchema = new mongoose.Schema({
  drugs: { type: String, required: true },
  quantity: { type: Number, required: true },
  drugform: { type: String, required: true },
  expire: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model('DrugListPharmicy', drugListPharmicySchema);
