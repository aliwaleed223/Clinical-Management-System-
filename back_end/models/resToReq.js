import mongoose from 'mongoose';

const pharmacyRequestSchema = new mongoose.Schema({
  pharmacistName: { type: String, required: true }, 
  requestDate: { type: Date, required: true },  
  drugName: { type: String, required: true }, 
  drugForm: { type: String, required: true }, 
  quantityRequested: { type: Number, required: true }, 
  notes: { type: String },
  
  storageResponse: {
    storageManagerName: { type: String, required: true }, 
    storageStatus: { type: String, required: true }, 
    availableQuantity: { type: Number }, 
    expirationDate: { type: Date }, 
    responseDate: { type: Date, required: true }, 
    additionalNotes: { type: String }
  }
}, { timestamps: true });

const PharmacyRequest = mongoose.model('PharmacyRequest', pharmacyRequestSchema);

export default PharmacyRequest;
