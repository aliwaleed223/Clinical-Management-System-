import mongoose from 'mongoose';

const invoiceItemSchema = new mongoose.Schema({
  category: { 
    type: String, 
    required: true },
    
  description: {
    type: String,
    required: false, 
  },
  quantity: {
    type: Number,
    required: true,
    
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  }
});

const invoiceSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  invoiceDate: {
    type: String,
    required: true,
  },
  issueDate: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  items: {
  type: [invoiceItemSchema],
  required: true,
}

}, { timestamps: true });

export default mongoose.model('Invoice', invoiceSchema);
