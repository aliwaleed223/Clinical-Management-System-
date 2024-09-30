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
router.get('/:id', pharmacistController.getDrugById);

// Update drug by ID
router.put('/:id', pharmacistController.updateDrug);

// Delete drug by ID
router.delete('/:id', pharmacistController.deleteDrug);

// Send Drug Request
router.post('/drugRequest', pharmacistController.requestDrugFromStorage);

export default router;
