import Patient from '../models/patient.js';
import QRCode from 'qrcode'
 

const patientController = {
  //Create QR image 
  createQr : async (req,res)=>{
  try {
    const url = `https://4000/patient/profile/${req.params.id}`;
    const qrCodeImage = await QRCode.toDataURL(url);
    res.setHeader('Content-Type', 'image/png');

    const img = Buffer.from(qrCodeImage.split(",")[1], 'base64');
    res.send(img);
  
  } catch (err) {
    console.error('Error generating QR code:', err);
    res.status(500).send('Internal Server Error');
  }

  },

  // Create a new patient
  createPatient: async (req, res) => {
    try {
        const { name, age, phone, description, medicine, cardNumber, gender, address, historicalSurgeries, memberShip } = req.body;
        const picturePath = req.file ? req.file.path : null;

        const newPatient = new Patient({
            name,
            age,
            phone,
            description,
            medicine,
            cardNumber,
            gender,
            address,
            historicalSurgeries,
            memberShip,
            picture: picturePath
        });

        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (error) {
        res.status(500).json({ message: 'Error creating patient', error });
    }

  },

  // Read all patients
  readAllPatients: async (req, res) => {
    try {
      const patients = await Patient.find({});
      res.status(200).send(patients);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Read a patient by ID
  readPatientById: async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).send();
      }
      res.status(200).send(patient);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Update a patient by ID
  updatePatient: async (req, res) => {
    try {
      const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!patient) {
        return res.status(404).send();
      }
      res.status(200).send(patient);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Delete a patient by ID
  deletePatient: async (req, res) => {
    try {
      const patient = await Patient.findByIdAndDelete(req.params.id);
      if (!patient) {
        return res.status(404).send();
      }
      res.status(200).send(patient);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

export default patientController;
