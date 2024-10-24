import Invoice from '../models/inVoice.js';
import logController from './logsController.js';


const invController = {

  // Create Invoice
  createInvoice: async (req, res) => {
    try {
      const newInvoice = new Invoice(req.body);
      await newInvoice.save();
      await logController.saveInLogs(req, newInvoice._id , Invoice , 'أنشاء فاتورة');
      res.status(201).send(newInvoice); 

    } catch (error) {
      res.status(400).send(error); 
    }
  },

  // Read All Invoices
  readAll: async (req, res) => {
    try {
      const allInvoices = await Invoice.find({});
      res.status(200).send(allInvoices); 
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Fetch Single Invoice
  readInvoice: async (req, res) => {
    try {
      const getInvoice = await Invoice.findById(req.params.id);
      if (!getInvoice) {
        return res.status(404).send(); 
      }
      res.status(200).send(getInvoice);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  readInvoiceByName: async (req, res) => {
  try {
    const { patientName } = req.params; // Extract patientName from the request parameters

    // Find the invoice based on the patientName
    const getInvoice = await Invoice.find({ patientName: patientName.trim() });

    if (getInvoice.length==0) {
      return res.status(404).send({ message: 'Invoice not found' }); 
    }

    res.status(200).send(getInvoice);
  } catch (error) {
    res.status(400).send(error);
  }
},

  // Update Invoice
  updateInvoice: async (req, res) => {
    try {
      const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!updatedInvoice) {
        return res.status(404).send(); 
      }
      
      await logController.updateLogs( updatedInvoice._id , Invoice );
      res.status(200).send(updatedInvoice); 
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Delete Invoice
  deleteInvoice: async (req, res) => {
    try {
      const invoiceId = req.params.id;
      await logController.saveInLogs(req, invoiceId , Invoice , 'حذف فاتورة');
      
      const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id);
      if (!deletedInvoice) {
        return res.status(404).send(); 
      }
      res.status(200).send(deletedInvoice);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default invController