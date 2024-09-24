import logSchema from "../models/logs.js"
import authController from '../controllers/authController.js';

const saveInLogs = async (req , userId , schemaName , activityType) => {
    try {
        const user = await schemaName.findById(userId);
        if (!user) {
            return { message: 'User not found' };
        }
       
        const getDate = await authController.getDecodedToken(req); 
        if (!getDate) { 
            return {message: 'getMe not work'}
        }
    
        const newLog = new logSchema({
            ID : userId,
            role: getDate.role,  
            userName: getDate.name,  
            activityType: activityType ,  
            relatedUser: user.patientName, 
            activityResult: 'مكتمل', 
            dateTime: user.createdAt,  
        });

        await newLog.save();

    } catch (error) {
        return { message: 'Error occurred while fetching the user', error: error.message };
    }
};

const getAllLogs = async (req, res) => {
    try {
        const logs = await logSchema.find().sort({ dateTime: -1 }).exec(); // Sort logs by dateTime in descending order
        return res.status(200).json(logs);
    } catch (error) {
        return res.status(500).json({ message: 'Error occurred while fetching logs', error: error.message });
    }
};

const updateLogs = async ( userId , schemaName ) => {
    try {

    const user = await schemaName.findById(userId);
    if (!user) {
      return { message: 'User not found' };
    }

    const updatedLogs = await logSchema.findOneAndUpdate(
      { ID: userId },
      {
        relatedUser: user.patientName,
      },
      {
        new: true,
        runValidators: true, 
      }
    );

    if (!updatedLogs) {
      return { message: 'Log not found or could not be updated' };
    }
    
    return updatedLogs;

  } catch (error) {
    return { message: 'Error occurred while updating the logs', error: error.message };
  }
  
};


const logController = {
    saveInLogs,
    getAllLogs,
    updateLogs
};

export default logController;