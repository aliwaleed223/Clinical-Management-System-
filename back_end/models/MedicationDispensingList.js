import mongoose from 'mongoose';

const MedicationDispensingListSchema = new mongoose.Schema({
  prescriptionNumber: {
    type: String,
    required: true
  },
  patientName: {
    type: String,
    required: true
  },
  dispensingDate: {
    type: Date,
  }
}, {
  timestamps: true
});

const MedicationDispensingList = mongoose.model('MedicationDispensingList', MedicationDispensingListSchema);

export default MedicationDispensingList;
