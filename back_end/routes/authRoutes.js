import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

// Register a new user
router.post('/signup', authController.registerUser);

// Login user
router.post('/login', authController.loginUser);

// logout user 
router.post('/logout',authController.Logout);

// protected middleware 
router.use(authController.protected);

// Get all users
router.get('/users',authController.fetchAllUsers);

// Get a single user by ID
router.get('/user/:id' , authController.fetchSingleUser);

// Update a user by ID
router.put('/updateUsers/:id', authController.updateUser);

// Delete a user by ID
router.delete('/deletUsers/:id',authController.deleteUser);

// getMe Function
router.get('/getMe' ,authController.getMe);


export default router;
