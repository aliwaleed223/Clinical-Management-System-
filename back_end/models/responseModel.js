import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
    responseDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, required: true },
    availability: { type: Number, required: true },
    storageManager: { type: String, required: true },
    status: { type: String, default: 'متوفر بالكامل' }
});

const Response = mongoose.model('Response', responseSchema);
export default Response;
