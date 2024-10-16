import express from 'express';
import patientController from '../controllers/patientController.js';
import authController from '../controllers/authController.js';
import createQr from '../controllers/createQrController.js';

const router = express.Router();

router.use(authController.protected);

  
// POST route to handle image upload and patient creation
router.post('/patients', patientController.createPatient);

// Get the Qr image 
router.get('/generateQR/:id', createQr);

// Read all patients
router.get('/patients', patientController.readAllPatients);

// Read a patient by ID
router.get('/patients/:id', patientController.readPatientById);

// Update a patient by ID
router.put('/patients/:id', patientController.updatePatient);

// Delete a patient by ID
router.delete('/patients/:id', patientController.deletePatient);

export default router;
