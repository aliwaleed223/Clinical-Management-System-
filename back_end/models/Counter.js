import mongoose from 'mongoose';

// Define the CounterSchema
const CounterSchema = new mongoose.Schema({
  requestType: {
    type: String,   // This will store the type of request (e.g., "prescription", "drugRequest")
    required: true,
    unique: true 
  },
  sequenceValue: {
    type: Number,
    default: 0
  }
});

const Counter = mongoose.model('Counter', CounterSchema);

// Define the function to get the next sequence value
const getNextSequenceValue = async (requestType) => {
  const counter = await Counter.findOneAndUpdate(
    { requestType },           // Find the document for the specific request type
    { $inc: { sequenceValue: 1 } }, // Increment the sequence value
    { new: true, upsert: true } // Return the updated document, create it if it doesn't exist
  );
  return counter.sequenceValue; // Return the updated sequence value
};

export default getNextSequenceValue ;

