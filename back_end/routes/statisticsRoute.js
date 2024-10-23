import express from 'express';
import  statistics  from '../controllers/statisticsController.js'; 

const router = express.Router();

// Route to get statistics (Total employers, patients, and new patients)
router.get('/getStatistics', statistics.getStatistics);

export default router;
