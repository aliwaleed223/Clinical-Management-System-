import mongoose from 'mongoose';

const pharmacistDrugSchema = new mongoose.Schema({
  drugName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  effectiveQuantity: {
    type: Number,
    required: true,
  },
});

const PharmacistDrug = mongoose.model('PharmacistDrug', pharmacistDrugSchema);

export default PharmacistDrug;
