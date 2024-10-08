import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({
  sequenceValue: {
    type: Number,
    default: 0
  }
});

const Counter = mongoose.model('Counter', CounterSchema);

export default Counter;
