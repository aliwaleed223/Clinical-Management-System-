import mongoose from 'mongoose';

const drugListSchema = new mongoose.Schema({
  drugName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
  },
  drugForm: {
    type: String,
    required: true
  },
  expirationDate: {
    type: String,
    required: true,
  } 
});

const DrugList = mongoose.model('DrugList', drugListSchema);

export default DrugList;
