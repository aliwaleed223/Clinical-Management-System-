import express from 'express';
import doctorController from '../controllers/doctorController.js';


const router = express.Router();

// assign Patient To Doctor
router.put('/assignPatientToDoctor', doctorController.assignPatientToDoctor) ;

// move Patient To Doctor
router.put('/movePatientToDoctor', doctorController.movePatientToDoctor) ;

// get wating patient
router.get('/getWaitingPatients/:id', doctorController.getWatingPatients);

// get Entered Patients
router.get('/getEnteredPatients/:id', doctorController.getEnteredPatients);


export default router;

