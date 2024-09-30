import mongoose from 'mongoose';

const requestedDrugSchema = new mongoose.Schema({
  pharmacistName: {
    type: String,
    required: true,
  },
  drugName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  requestDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
});

const RequestedDrug = mongoose.model('RequestedDrug', requestedDrugSchema);
export default RequestedDrug;
