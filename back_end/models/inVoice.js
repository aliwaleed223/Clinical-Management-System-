import mongoose from 'mongoose';
import moment from 'moment'; 

const invoiceItemSchema = new mongoose.Schema({
  category: { 
    type: String, 
    required: true 
  },
  description: {
    type: String,
    required: true, 
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
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
    type: Date,
    required: true,
  },
  issueDate: {
    type: Date,
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


invoiceSchema.methods.toJSON = function() {
  const invoice = this.toObject();
  

  if (invoice.createdAt) {
    invoice.createdAt = moment(invoice.createdAt).format('YYYY/M/D');
  }

  return invoice;
};

export default mongoose.model('Invoice', invoiceSchema);
