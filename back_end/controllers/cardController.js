import fs from 'fs';
import QRCode from 'qrcode';
import Patient from '../models/patient.js';

export const saveCardData = async (req, res) => {
  try {
    const { patientName } = req.body;
    
    // Find the patient in the database by name
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

    // Generate QR code as a data URL (base64)
    const qrCodeImage = await QRCode.toDataURL(profileUrl);

    // Respond with patient details and the QR code in base64 format
    return res.status(200).json({
      message: 'Patient data and QR code generated successfully',
      patient: {
        id: patientId,
        name: patient.patientName,  // Ensure this field matches your schema
        qrCodeImage: qrCodeImage    // Send the base64-encoded QR code
      }
    });

  } catch (error) {
    console.error('Internal server error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
