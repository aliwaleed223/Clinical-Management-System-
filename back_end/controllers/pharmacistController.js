import resToReq from '../models/resToReq.js'; 
import RequestedDrug from '../models/requestedDrug.js'; 
import Response from '../models/responseModel.js';
import DrugList from '../models/drugList.js';
import Prescription from '../models/Prescription.js';
import MedicationDispensingList from '../models/MedicationDispensingList.js';


const pharmacistController = {
  
  
requestDrugFromStorage: async (req, res) => {
  try {
    const { pharmacistName, medicines, additionalNote } = req.body;

    // Ensure drugs is an array and contains valid objects
    if (!Array.isArray(medicines) || medicines.length === 0) {
      return res.status(400).json({ message: 'At least one drug must be included in the request' });
    }

    const newRequest = new RequestedDrug({
      pharmacistName,
      medicines,
      additionalNote,
      status: 'pending',
      requestDate: new Date(),
    });

    await newRequest.save();

    req.app.get('io').emit('new-drugRequest', newRequest);

    // Send a response back to the pharmacist
    res.status(201).json({ message: 'تم إرسال الطلب بنجاح', request: newRequest });
  } catch (error) {
    console.log(error); // Log the error for debugging
    res.status(400).json({ message: error.message });
  }
},

// requset list in storage
reqListinstore: async (req, res) => {
  try {
  
    const availableDrugs = await RequestedDrug.find({ });
    res.status(200).json(availableDrugs);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }

},

// Get one requested drug by ID
getRequestedDrugById: async (req, res) => {
  try {
    const requestedDrug = await RequestedDrug.findById(req.params.id);

    if (!requestedDrug) {
      return res.status(404).json({ message: "Requested drug not found" });
    }

    res.status(200).json(requestedDrug);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
},



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

    const newDrug = new DrugList({
      drugName,
      quantity:availableQuantity,
      drugForm,
      expirationDate
    });

  
    await newDrug.save();


    // Create a new request
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

    // Save the new request entry
    await newRequest.save();

    // Emit the new response after both operations are successful
    req.app.get('io').emit('new-response', newRequest);

    // Send the response back to the client
    res.status(201).json({ data: newRequest });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
},

fetchRes: async (req, res) => {
    try {
        const drugs = await resToReq.find();
        res.status(200).json(drugs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
},

// قائمة الادوية
getDrugList: async (req, res) => {
  try {
  
    const availableDrugs = await DrugList.find({ quantity: { $gt: 0 } });
    res.status(200).json(availableDrugs);

  } catch (error) {
    // Handle errors
    res.status(400).json({ message: error.message });
  }

},

  // Filter Prescriptions by Name
  filterByName: async (req, res) => {
    try {
      const { name } = req.query; // Get name from query parameters
      if (!name) {
        return res.status(400).json({ message: 'Please provide a name to filter' });
      }

      const filteredPrescriptions = await Prescription.find({ patientName: { $regex: name, $options: 'i' } });

      if (filteredPrescriptions.length === 0) {
        return res.status(404).json({ message: 'No prescriptions found for this name' });
      }

      res.status(200).json(filteredPrescriptions);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

// صرف الدواء 
dispensingMedication: async (req, res) => { 
  try {
    const {prescriptionNumber , patientName, prescriptions } = req.body;


    const { drugName, quantity } = prescriptions[0]; // Access the first prescription

    // Find the drug by name (case-insensitive)
    const drug = await DrugList.findOne({ drugName: { $regex: new RegExp('^' + drugName + '$', 'i') } });

    // Check if the drug exists
    if (!drug) {
      return res.status(404).json({ message: 'Drug not found' });
    }

    // Check if there is enough quantity to reduce
    if (drug.quantity < quantity) {
      return res.status(400).json({ message: 'Not enough quantity available' });
    }

    // Decrease the quantity
    drug.quantity -= quantity;

    // Save the updated drug data
    await drug.save();


    const newDispesing = new MedicationDispensingList({
      prescriptionNumber,
      patientName
    });

    await newDispesing.save();

    

    // Return the updated drug information
    res.status(200).json({ message: 'Quantity updated successfully', drug });

  } catch (error) {
    // Handle errors
    res.status(400).json({ message: error.message });
  }
},


// قائمة صرف الادوية
despensingDrug: async (req, res) => {
  try {
  
    const despensingDrug = await MedicationDispensingList.find({});
    res.status(200).json(despensingDrug);

  } catch (error) {
    // Handle errors
    res.status(400).json({ message: error.message });
  }

},













// FOR TESTING ------
// Fetch all drugs (قائمة الادوية)
creatRes: async (req, res) => {
  try {
    const {
      availability,
      storageManager,
      expiryDate,
    } = req.body;

    const newDrugListPharmicy = new Response({
      availability,
      storageManager,
      expiryDate,
    });

    await newDrugListPharmicy.save();

    // Emit the saved drug entry via Socket.IO
    req.app.get('io').emit('new-response', newDrugListPharmicy);  // Corrected this line to emit the saved object
    
    res.status(200).json(newDrugListPharmicy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
},

};

export default pharmacistController;
    