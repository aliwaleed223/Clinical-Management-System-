import mongoose from 'mongoose';
import Counter from './Counter.js'; // Adjust the path as necessary

const PrescriptionSchema = new mongoose.Schema({
  prescriptionNumber: {
    type: Number,
    unique: true
  },
  patientName: {
    type: String,
    required: true
  },
  patientAge: {
    type: Number,
    required: true
  },
  patientGender: {
    type: String,
    required: true
  },
  medicalProcedure: {
    type: String,
    required: true
  },
  reviewDate: {
    type: Date,
    required: true
  },
  diagnosis: {
    type: String,
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  procedureCost: {
    type: Number,
    required: true
  },
  prescriptions: [
    {
      medicineName: { type: String, required: true },
      dose: { type: String, required: true },
      form: { type: String },
      frequency: { type: String, required: true },
      duration: { type: String, required: true },
      instructions: { type: String },
      quantity: { type: Number, required: true }
    }
  ],
  additionalNotes: {
    type: String
  }
}, {
  timestamps: true
});

// Middleware to auto-increment prescriptionNumber
PrescriptionSchema.pre('save', async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      {},
      { $inc: { sequenceValue: 1 } },
      { new: true, upsert: true }
    );

    this.prescriptionNumber = counter.sequenceValue;
  }
  next();
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

export default Prescription;
