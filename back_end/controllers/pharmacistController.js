import resToReq from '../models/resToReq.js'; 
import RequestedDrug from '../models/requestedDrug.js'; 
import DrugListPharmicy from '../models/DrugListPharmicy.js';

const pharmacistController = {
  
  
    requestDrugFromStorage: async (req, res) => {
  try {
    const { pharmacistName, drugName, quantity ,drugForm ,additionalNote } = req.body;

    const newRequest = new RequestedDrug({
      pharmacistName,
      drugName,
      quantity,
      drugForm,
      additionalNote,
      status: 'pending', 
      requestDate: new Date(),
    });

    // Save the request to the requestedDrug collection
    await newRequest.save(); // Use the save method on the instance

    // notification code ---------
    // Create a notification for the storage manager
    // const notification = new Notification({
    //   message: `طلب دواء جديد من الصيدلي ${pharmacistName}`,
    //   requestId: newRequest._id,
    //   isRead: false, // Mark as unread notification
    //   createdAt: new Date(),
    // });
    // Save the notification
    // await notification.save();
    //--------------------------//

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
    
    // Update the request status in the requestedDrug collection
    const deletedRequest = await RequestedDrug.findByIdAndDelete(requestId);

    if (!deletedRequest) {
      return res.status(404).json({ message: 'Request not found' });
     }

    // Extract data from the request body
    const {
      pharmacistName,
      requestDate,
      drugName,
      drugForm,
      quantityRequested,
      notes,
      storageManagerName,
      storageStatus,
      availableQuantity,
      expirationDate,
      responseDate,
      additionalNotes
    } = req.body;


    const newDrugListPharmicy = new DrugListPharmicy({
      drugs:  drugName,
      quantity:  availableQuantity,
      drugform: drugForm,
      expire:   expirationDate
    })

    await newDrugListPharmicy.save();

      const newRequest = new resToReq({
      pharmacistName,
      requestDate,
      drugName,
      drugForm,
      quantityRequested,
      notes,
      storageResponse: {
        storageManagerName,
        storageStatus,
        availableQuantity,
        expirationDate,
        responseDate,
        additionalNotes
      }
    });

    // Save to the database
    await newRequest.save();

    // Mark the notification as read or remove it
    // await Notification.findOneAndDelete({ requestId });

    // Send response to storage manager and pharmacist
   
     res.status(201).json({ data: newRequest });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  },

  // Function to get pending notifications for the storage manager
  requestedList: async (req, res) => {
    try {
      const notifications = await RequestedDrug.find();
      res.status(200).json(notifications);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Fetch all drugs (قائمة الادوية)
  getAllDrugs: async (req, res) => {
    try {
      const drugs = await DrugListPharmicy.find({ quantity: { $gt: 0 } });
      
      res.status(200).json(drugs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Fetch all responses (قائمة استجابة الطلبات)
  getAllResponses: async (req, res) => {
    try {
      const drugs = await resToReq.find();
      
      res.status(200).json(drugs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },


    // Fetch all responses (قائمة استجابة الطلبات)
  getResById: async (req, res) => {
    try {
      const drugs = await resToReq.findById(req.params.id);
      
      res.status(200).json(drugs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },



};

export default pharmacistController;
    