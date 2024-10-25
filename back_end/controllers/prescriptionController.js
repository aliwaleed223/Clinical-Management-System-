import Prescription from '../models/Prescription.js';
import logController from './logsController.js';
import getNextSequenceValue from '../models/Counter.js';

const prescriptionController = {


  // Create Prescription
  createPrescription: async (req, res) => {
    try {
      const serialNumber = await getNextSequenceValue('prescription');

      const newPrescription = new Prescription({
        
        patientName: req.body.patientName,
        patientAge: req.body.patientAge,
        patientGender: req.body.patientGender,
        medicalProcedure: req.body.medicalProcedure,
        reviewDate: req.body.reviewDate,
        diagnosis: req.body.diagnosis,
        doctorName: req.body.doctorName,
        procedureCost: req.body.procedureCost,
        prescriptions: req.body.prescriptions,
        additionalNotes: req.body.additionalNotes,
        prescriptionNumber : serialNumber
      });
      await newPrescription.save();
      res.status(201).json(newPrescription);

      await logController.saveInLogs(req, newPrescription._id, Prescription, 'أضافة وصفة طبية');

    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Read All Prescriptions
  readAll: async (req, res) => {
    try {
      const allPrescriptions = await Prescription.find({}).sort({ createdAt: -1 }); 
      res.status(200).json(allPrescriptions);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Fetch Single Prescription
  readPrescription: async (req, res) => {
    try {
      const getPrescription = await Prescription.findById(req.params.id);
      if (!getPrescription) {
        return res.status(404).json({ message: 'Prescription not found' });
      }
      res.status(200).json(getPrescription);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },


  // get prescription by name 
  readPrescriptionByName: async (req, res) => {
  try {
    const { patientName } = req.params;

    // Find the prescriptions based on the patientName
    const getPrescription = await Prescription.find({ patientName: patientName.trim()});

    if (getPrescription.length === 0) {
      return res.status(404).json({ message: 'No prescriptions found for this patient' });
    }

    res.status(200).json(getPrescription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
},

  // Update Prescription
  updatePrescription: async (req, res) => {
    try {
      const updatedPrescription = await Prescription.findByIdAndUpdate(
        req.params.id,
        {
          patientName: req.body.patientName,
          patientAge: req.body.patientAge,
          patientGender: req.body.patientGender,
          medicalProcedure: req.body.medicalProcedure,
          reviewDate: req.body.reviewDate,
          diagnosis: req.body.diagnosis,
          doctorName: req.body.doctorName,
          procedureCost: req.body.procedureCost,
          prescriptions: req.body.prescriptions,
          additionalNotes: req.body.additionalNotes
        },
        {
          new: true,
          runValidators: true
        }
      );
      if (!updatedPrescription) {
        return res.status(404).json({ message: 'Prescription not found' });
      }

      // Log action: 'Updated prescription'
      await logController.updateLogs(updatedPrescription._id, Prescription);
      res.status(200).json(updatedPrescription);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete Prescription
  deletePrescription: async (req, res) => {
    try {
      const preId = req.params.id;


      await logController.saveInLogs(req, preId, Prescription, 'الغاء وصفة');

      const deletedPrescription = await Prescription.findByIdAndDelete(req.params.id);
      if (!deletedPrescription) {
        return res.status(404).json({ message: 'Prescription not found' });
      }
      res.status(200).json(deletedPrescription);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default prescriptionController;
