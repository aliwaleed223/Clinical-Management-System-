import PharmacistDrug from '../models/PharmacistDrug.js';
import Notification from '../models/Notification.js'; 
import RequestedDrug from '../models/requestedDrug.js'; 

const pharmacistController = {
  
  // Create new drug entry
  addDrug: async (req, res) => {
    try {
      const newDrug = new PharmacistDrug(req.body);
      await newDrug.save();
      res.status(201).json(newDrug);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Fetch all drugs
  getAllDrugs: async (req, res) => {
    try {
      const drugs = await PharmacistDrug.find({});
      res.status(200).json(drugs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Fetch a single drug by ID
  getDrugById: async (req, res) => {
    try {
      const drug = await PharmacistDrug.findById(req.params.id);
      if (!drug) {
        return res.status(404).json({ message: 'Drug not found' });
      }
      res.status(200).json(drug);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update drug details
  updateDrug: async (req, res) => {
    try {
      const updatedDrug = await PharmacistDrug.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedDrug) {
        return res.status(404).json({ message: 'Drug not found' });
      }
      res.status(200).json(updatedDrug);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete drug entry
  deleteDrug: async (req, res) => {
    try {
      const deletedDrug = await PharmacistDrug.findByIdAndDelete(req.params.id);
      if (!deletedDrug) {
        return res.status(404).json({ message: 'Drug not found' });
      }
      res.status(200).json(deletedDrug);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  
    requestDrugFromStorage: async (req, res) => {
  try {
    const { pharmacistName, drugName, quantity } = req.body;

    const newRequest = new RequestedDrug({
      pharmacistName,
      drugName,
      quantity,
      status: 'pending', 
      requestDate: new Date(),
    });

    // Save the request to the requestedDrug collection
    await newRequest.save(); // Use the save method on the instance


    // Create a notification for the storage manager
    const notification = new Notification({
      message: `طلب دواء جديد من الصيدلي ${pharmacistName}`,
      requestId: newRequest._id,
      isRead: false, // Mark as unread notification
      createdAt: new Date(),
    });

    // Save the notification
    await notification.save();

    // Send a response back to the pharmacist
    res.status(201).json({ message: 'تم إرسال الطلب بنجاح', request: newRequest });
  } catch (error) {
    console.log(error); // Add this to see the full error in the console
    res.status(400).json({ message: error.message });
  }
},

    // Function for responding to drug requests in the storage (by storage manager)
    respondToDrugRequest: async (req, res) => {
    try {
    const { requestId } = req.params;
    const { status } = req.body;  // Status can be 'approved' or 'rejected'

    // Update the request status in the requestedDrug collection
    const updatedRequest = await RequestedDrug.findByIdAndUpdate(
      requestId,
      { status },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: 'الطلب غير موجود' });
    }

    // Mark the notification as read or remove it
    await Notification.findOneAndDelete({ requestId });

    // Send response to storage manager and pharmacist
    res.status(200).json({ message: `تمت معالجة الطلب وتم ${status === 'approved' ? 'إرسال الدواء' : 'رفض الطلب'}`, request: updatedRequest });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  },

  // Function to get pending notifications for the storage manager
  getNotifications: async (req, res) => {
    try {
      const notifications = await Notification.find({ isRead: false });
      res.status(200).json(notifications);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


};

export default pharmacistController;
    