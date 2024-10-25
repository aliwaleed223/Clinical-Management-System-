import mongoose from 'mongoose';

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
  dose: {
    type: String,
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


const Prescription = mongoose.model('Prescription', PrescriptionSchema);

export default Prescription;
