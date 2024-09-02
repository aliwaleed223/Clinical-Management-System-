import mongoose from 'mongoose';

const PrescriptionSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  medicine: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,  
  },
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

export default Prescription;
