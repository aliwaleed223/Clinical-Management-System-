import Patient from "../models/patient.js";

const doctorController = {

assignPatientToDoctor : async (req, res) => {
try {
      const { patientId, doctorId } = req.body;

      // Use findByIdAndUpdate to only update the 'doctor' field
      const updatedPatient = await Patient.findByIdAndUpdate(
        patientId,
        { doctor: doctorId , status: "waiting"}, 
        { new: true } 
      );

      if (!updatedPatient) {
        return res.status(404).json({ success: false, message: 'Patient not found' });
      }

      // Emit a real-time event to notify the doctor of the new patient
      req.app.get('io').emit('newPatient', updatedPatient);

      res.  status(200).json({ success: true, message: 'Patient assigned successfully', patient: updatedPatient });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }

},


getWatingPatients : async (req , res  ) => { 
  try {
    const waitingPatients = await Patient.find({ doctor: req.params.id, status: 'waiting' });
    res.status(200).json(waitingPatients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching waiting patients', error });
  }
},

getEnteredPatients : async (req , res )=> {

  try {
    const enteredPatients = await Patient.find({ doctor: req.params.id, status: 'entered' });
    res.status(200).json(enteredPatients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entered patients', error });
  }

  },


movePatientToDoctor : async (req , res)=> {
const { patientId } = req.body;

  try {
    const patient = await Patient.findByIdAndUpdate(patientId, { status: 'entered' }, { new: true });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({ message: 'Patient entered to doctor', patient });
  } catch (error) {
    res.status(500).json({ message: 'Error moving patient to doctor', error });
  }

}

}

     
export default doctorController

//createdAt: { $gte: new Date().setHours(0, 0, 0, 0) }
