import express from 'express';
import storageController from '../controllers/storageController.js';
import authController from '../controllers/authController.js';

const router = express.Router();

router.use(authController.protected);

// Create a new product
router.post('/products', storageController.createProduct);

// Fetch all products
router.get('/products', storageController.fetchAllProducts);

// Fetch a single product by ID
router.get('/products/:id', storageController.fetchProductById);

// Update a product by ID
router.put('/products/:id', storageController.updateProduct);

// Delete a product by ID
router.delete('/products/:id', storageController.deleteProduct);

export default router;
