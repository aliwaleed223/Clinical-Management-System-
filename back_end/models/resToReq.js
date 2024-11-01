import mongoose from 'mongoose';

const pharmacyRequestSchema = new mongoose.Schema({
  pharmacistName: { type: String, required: true }, 
  requestDate: { type: String, required: true },  
  quantityRequested: { type: Number, required: true }, 
  notes: { type: String },
  
  storageManagerName: { type: String, required: true }, 
  storageStatus: { type: String, required: true }, 
  drugs: [{
    drugName: { type: String, required: true }, 
    drugForm: { type: String, required: true },
    availableQuantity: { type: Number }, 
    expirationDate: { type: String },
    dose: { type: String }
  }],
  confirmationStatus: { type: Boolean, default: false }, 
   confirmingPharmacistName: { type: String, default: null },
  responseDate: { type: String, required: true }, 
  additionalNotes: { type: String }
}, { timestamps: true });

const PharmacyRequest = mongoose.model('resToReqFromStorage', pharmacyRequestSchema);

export default PharmacyRequest;
