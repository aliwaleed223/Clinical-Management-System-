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
   },
  doctor: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
    }, 
  status: {
    type: String,
    enum: ['waiting', 'entered'],
    default: 'waiting',
  },
  age: {
    type: Number,
   },
  phone: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
   },
  idNumber: {
    type: String,
   },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  diseaseType: {
    type: String,
  },
  disease: {
    type: String,
  },
  notes: {
    type: String,
  },
  picture: {
        type: String,
    }  
});

const Patient = mongoose.model('Patient', PatientSchema);
export default Patient;
