import User from '../models/user.js'; 
import Patient from '../models/patient.js'; 
import moment from 'moment'; 

const statistics = {
   getStatistics: async (req, res) => {
      try {
         // 1. Calculate total number of employers from User schema
         const totalEmployers = await User.countDocuments(); 

         // 2. Calculate total number of patients from Patient schema
         const totalPatients = await Patient.countDocuments();  

         // 3. Calculate new patients (those registered within the last 2 weeks)
         const twoWeeksAgo = moment().subtract(2, 'weeks').toDate(); 
         const newPatients = await Patient.countDocuments({
            registrationDate: { $gte: twoWeeksAgo } 
         });

         // Send the statistics as a response
         res.status(200).json({
            totalEmployers,  
            totalPatients,   
            newPatients      
         });
      } catch (error) {
         console.error('Error fetching statistics:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }
};

export default statistics;
