import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Blacklist from '../models/balcklist.js'


dotenv.config();

const secretKey = process.env.ACCESS_TOKEN_SECRET;

const authController = {

  // Register a new user
registerUser: async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Check if the username exists
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const user = new User({ username, password, role });
    await user.save();

    const token = jwt.sign({name: user.username, id: user._id, role: user.role }, secretKey, { expiresIn: '8h' });
    res.json({ token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).send('Error registering user');
  }
},

  // Login user and generate JWT
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) return res.status(401).send('Invalid username or password');

      if (!bcrypt.compare(password, user.password)) 
      return res.status(401).send('Invalid username or password');

      const token = jwt.sign({name: user.username, id: user._id, role: user.role }, secretKey, { expiresIn: '8h' });
      res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).send('Error logging in');
    }
  }, 

  // logout the user 
Logout: async (req, res) => {
  try {
    // Get the token from the Authorization header
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(204); // No content

    // Extract the token from the header (assuming Bearer scheme)
    const accessToken = authHeader.split(' ')[1];

    // Check if that token is blacklisted
    const checkIfBlacklisted = await Blacklist.findOne({ token: accessToken });

    // If true, send a no content response.
    if (checkIfBlacklisted) return res.sendStatus(204); 

    // Otherwise, blacklist the token
    const newBlacklist = new Blacklist({
      token: accessToken,
    });
    await newBlacklist.save();
 
    // note : the token should remove from local storge by the front end 
    // since local storage is managed entirely by the client's browser.

    // Send a success response
    res.status(200).json({ message: 'You are logged out!' });

  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
  res.end();
},
//fetch all the users
 fetchAllUsers: async(req,res,next)=>{
  try {
    const Users = await User.find({});
    res.json(Users);

  }
  catch(err){
    console.log(err);
    res.status(400).send("error during fetching");
  }

 },

 fetchSingleUser: async(req,res,next)=>{
  try{
   const user =await User.findById(req.params.id);
   res.json(user);
  }
  catch(err){
   console.log(err);
   res.status(400).send("error during fetching");
  }
   
 },


//update
updateUser:async(req,res,next)=>{
  try {
      const updatedInvoice = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!updatedInvoice) {
        return res.status(404).send(); // 404 Not Found if invoice not found
      }
      res.status(200).send(updatedInvoice); 
    } catch (error) {
      res.status(400).send(error);
    }

},

//delete
deleteUser:async(req,res,next)=>{
 try{
  const deletedUser=await User.findByIdAndDelete(req.params.id);
  res.json(deletedUser);
 }
 catch(err){
  console.log(err);
  res.status(400).send("error during deleting");
 }
},

getMe: async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
 
    const splitToken = authHeader.split(' ')[1];

    // The payload is the second part (index 1)
    const payloadBase64 = splitToken.split('.')[1];

    const payloadJson = Buffer.from(payloadBase64, 'base64').toString('utf-8');
   
    const payload = JSON.parse(payloadJson);
    
    res.status(200).json(payload);

  } catch (error) {
    console.log(error);
    res.status(400).send('Error');
  }
},

protected : async (req , res ,next) => {

  try{
    const authHeader =req.headers['authorization'];

    if (!authHeader){
      return  res.status(400).json({"msg":"You Are Not Authintacted !"});
    }

    const splitToken = authHeader.split(' ')[1];

    jwt.verify(splitToken, secretKey, (err, user) => {
      if (err) {
         return res.status(403).json({ "msg": "Token is not valid!" });
      }
        next();
    } )

  }
  
  catch (err){
   console.log(err);
   res.status(400).json('Error ');
  }
}


};

export default authController;