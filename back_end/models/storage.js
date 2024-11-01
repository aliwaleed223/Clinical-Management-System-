import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  purchaseDate: {
    type: Date,
   },
  description: {
    type: String,
   },
  expireDate: {
    type: Date,
  },
  category: {
    type: String,
   },
  quantity: {
    type: Number,
   },
  productNumber: {
    type: String,
    unique: true,
   },
  barcode: {
    type: String,
    required: false,
  },
  purchasePrice: {
    type: Number,
   },
  sellingPrice: {
    type: Number,
   },
  minimumSellingPrice: {
    type: Number,
   },
  discount: {
    type: Number,
   },
  discountType: {
    type: String,
    enum: ['percentage', 'fixed'],
   },
  finalPrice: {
    type: Number,
    required: false,
  },
}, {
  timestamps: true
});

export default mongoose.model('Product', productSchema);
