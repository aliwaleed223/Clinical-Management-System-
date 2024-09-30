import express from 'express';
import pharmacistController from '../controllers/pharmacistController.js';
import authController from '../controllers/authController.js';

const router = express.Router();

// protected middleware
router.use(authController.protected);

// Add new drug
router.post('/add', pharmacistController.addDrug);

// Get all drugs
router.get('/list', pharmacistController.getAllDrugs);

// Get drug by ID
router.get('/getDrug/:id', pharmacistController.getDrugById);

// Update drug by ID
router.put('/updateById/:id', pharmacistController.updateDrug);

// Delete drug by ID
router.delete('/deleteById/:id', pharmacistController.deleteDrug);

// Send Drug Request
router.post('/drugRequest', pharmacistController.requestDrugFromStorage);

// Get all notification 
router.get('/getNotifications', pharmacistController.getNotifications);

// respond To Drug request
router.put('/respondToDrug/:requestId', pharmacistController.respondToDrugRequest);

export default router;
