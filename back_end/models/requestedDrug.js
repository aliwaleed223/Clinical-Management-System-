import mongoose from 'mongoose';

const requestedDrugSchema = new mongoose.Schema({
  pharmacistName: {
    type: String,
    required: true,
  },
  medicines: [
    {
      drugName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      drugForm: {
        type: String,
      },
      dose: {
        type: String,
      },
    },
  ],
  requestDate: {
    type: Date,
    default: Date.now,
  },

  serialNumber: {
    type: Number,
  },

  additionalNote: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

const RequestedDrug = mongoose.model('RequestedDrug', requestedDrugSchema);
export default RequestedDrug;
