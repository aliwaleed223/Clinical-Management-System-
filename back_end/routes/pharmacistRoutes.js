import express from 'express';
import pharmacistController from '../controllers/pharmacistController.js';
import authController from '../controllers/authController.js';

const router = express.Router();

// Protected middleware
router.use(authController.protected);

// Send Drug Request
router.post('/drugRequest', pharmacistController.requestDrugFromStorage);

// Respond to Drug Request
router.put('/respondToDrug/:requestId', pharmacistController.respondToDrugRequest);

// Create a new drug response (consider renaming for consistency)
router.post('/responses', pharmacistController.creatRes);

// Fetch all drug responses
router.get('/responses', pharmacistController.fetchRes);

// get all drugList if Quantity > 0 
router.get('/getDrugList', pharmacistController.getDrugList);

// Filter prescriptions by name
router.get('/filterByName', pharmacistController.filterByName); 

// Dispensing medication 
router.post('/despensingMedic', pharmacistController.dispensingMedication); 

// get Dispensing medication
router.get('/despensingMedic', pharmacistController.despensingDrug); 

// req list in storage
router.get('/reqList', pharmacistController.reqListinstore); 

// get requested drug by 
router.get('/getRequestedDrugById/:id', pharmacistController.getRequestedDrugById); 


export default router;
