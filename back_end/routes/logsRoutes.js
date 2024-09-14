import express from 'express';
import logController from '../controllers/logsController.js';
import authController from '../controllers/authController.js';

const router = express.Router();


router.use(authController.protected);

// Read All Logs
router.get('/allLogs', logController.getAllLogs)


export default router;

