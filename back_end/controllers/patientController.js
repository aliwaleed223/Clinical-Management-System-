import Patient from '../models/patient.js';
import logController from './logsController.js';


const patientController = {

  // Create a new patient
  createPatient: async (req, res) => {
    try {
        const { patientName, age, phone, gender, address, registrationDate , idNumber, email, disease, diseaseType, notes ,state} = req.body;
        const picturePath = req.file ? req.file.path : null;

        const newPatient = new Patient({
            patientName,
            age,
            phone,
            registrationDate,
            idNumber,
            gender,
            address,
            email,
            disease,
            diseaseType,
            notes,
            state,
            picture: picturePath
        });

        const savedPatient = await newPatient.save();
        await logController.saveInLogs(req, savedPatient._id , Patient , 'أضافة مريض');
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
      const patientId = req.params.id;
      await logController.saveInLogs(req, patientId , Patient , 'حذف مريض');

      
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
