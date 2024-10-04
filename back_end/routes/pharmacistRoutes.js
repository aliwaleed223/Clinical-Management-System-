import express from 'express';
import pharmacistController from '../controllers/pharmacistController.js';
import authController from '../controllers/authController.js';

const router = express.Router();

// protected middleware
router.use(authController.protected);

// Send Drug Request
router.post('/drugRequest', pharmacistController.requestDrugFromStorage);

// Get all notification 
router.get('/getNotifications', pharmacistController.requestedList);

// respond To Drug request
router.put('/respondToDrug/:requestId', pharmacistController.respondToDrugRequest);

// get all drug
router.get('/getAllDrug', pharmacistController.getAllDrugs);

// get all responses (قائمة استجابة الطلبات)
router.get('/getAllResponses', pharmacistController.getAllResponses);

// استجابة طلب الصيدلية
router.get('/getResponses/:id', pharmacistController.getResById);

export default router;
