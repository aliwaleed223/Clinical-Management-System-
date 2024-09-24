import QRCode from 'qrcode'

//Create QR image 
const createQr = async (req, res) => {
    try {
    const url = `https://4000/patient/profile/${req.params.id}`;
    const qrCodeImage = await QRCode.toDataURL(url);
    res.setHeader('Content-Type', 'image/png');

    const img = Buffer.from(qrCodeImage.split(",")[1], 'base64');
    res.send(img);
  
  } catch (err) {
    console.error('Error generating QR code:', err);
    res.status(500).send('Internal Server Error');
  }

};

export default createQr;