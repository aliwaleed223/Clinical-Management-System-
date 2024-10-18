import fs from 'fs';
import QRCode from 'qrcode';
import Patient from '../models/patient.js';


export const saveCardData = async (req, res) => {
  try {
    
    const { patientName } = req.body;
    
    const patient = await Patient.findOne({ patientName });  
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Handle image upload
    if (req.file) {
      const picturePath = req.file.path;  // Get the file path directly

      // Save the image path in the patient schema
      patient.picture = picturePath;
      await patient.save();
    } else {
      return res.status(400).json({ message: 'No image uploaded' });
    }

    // Generate QR code with patient profile URL
    const patientId = patient._id;
    const profileUrl = `http://localhost:5000/patient-profile/${patientId}`;

    // Generate QR code as a data URL and send it as a PNG image
    const qrCodeImage = await QRCode.toDataURL(profileUrl);
    
    // Extract base64 part and convert it to Buffer
    const img = Buffer.from(qrCodeImage.split(",")[1], 'base64');

    // Set the response headers to send the image
    res.setHeader('Content-Type', 'image/png');
    return res.send(img);

  } catch (error) {
    console.error('Internal server error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
