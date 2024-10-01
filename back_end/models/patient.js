import mongoose from 'mongoose';

const { Schema } = mongoose;

const PatientSchema = new Schema({
  patientName: {
    type: String,
    required: true,
  },
  state : {
   type : String,
   required : false
  },
  gender: {
    type: String,
    //enum: ['Male', 'Female'],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    required: true,
  },
  idNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  diseaseType: {
    type: String,
    required: true,
  },
  disease: {
    type: String,
  },
  notes: {
    type: String,
  },
  picture: {
        type: String,
        required: false 
    }  
});

const Patient = mongoose.model('Patient', PatientSchema);
export default Patient;
