import Prescription from '../models/Prescription.js';

const prescriptionController = {

  // Create Prescription
  createPrescription: async (req, res) => {
    try {
      const newPrescription = new Prescription(req.body);
      await newPrescription.save();
      res.status(201).json(newPrescription); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  },

  // Read All Prescriptions
  readAll: async (req, res) => {
    try {
      const allPrescriptions = await Prescription.find({});
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

  // Update Prescription
  updatePrescription: async (req, res) => {
    try {
      const updatedPrescription = await Prescription.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );
      if (!updatedPrescription) {
        return res.status(404).json({ message: 'Prescription not found' }); 
      }
      res.status(200).json(updatedPrescription); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete Prescription
  deletePrescription: async (req, res) => {
    try {
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
