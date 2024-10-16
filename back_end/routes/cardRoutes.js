import express from 'express';
import multer from 'multer';
import path from 'path';
import { saveCardData } from '../controllers/cardController.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Define the route to save card data
router.post('/save-card', upload.single('image'), saveCardData);

export default router;
