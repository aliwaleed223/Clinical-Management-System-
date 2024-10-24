import express from 'express';
import cors from 'cors';
import patientRoutes from './routes/patientRoutes.js';
import invRouter from './routes/inVoiceRoutes.js';
import authRoutes from './routes/authRoutes.js';
import persRoutes from './routes/prescriptionRoutes.js';
import storageRoutes from './routes/storageRoutes.js';
import logsRoutes from './routes/logsRoutes.js';
import pharmacistRoutes from './routes/pharmacistRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import cardRoutes from './routes/cardRoutes.js';
import statisticsRoute from './routes/statisticsRoute.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// const whitelist = ['http://localhost:5000']; 
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

app.use(cors());

// Error handling middleware for logging errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Make the uploads folder accessible to the public
app.use('/uploads', express.static('uploads'));

// Use route handlers with distinct prefixes
app.use('/api/patient', patientRoutes);
app.use('/api/invoice', invRouter);
app.use('/api/auth', authRoutes);
app.use('/api/pers', persRoutes);
app.use('/api/storage', storageRoutes);
app.use('/api/logs', logsRoutes);
app.use('/api/pharmacist', pharmacistRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/card', cardRoutes);
app.use('/api/statistics', statisticsRoute);

// Default error handling middleware 
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

export default app;
