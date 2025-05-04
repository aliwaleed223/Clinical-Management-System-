import http from 'http';         // Import HTTP module to create server
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Server } from 'socket.io';  // Import Socket.IO for WebSocket functionality
import app from './app.js';

// Load environment variables
dotenv.config();
const port = process.env.PORT || 4000;

// Connect to MongoDB
// 'mongodb://localhost:27017'
try {
  await mongoose.connect(process.env.DATABASE_URL);
} catch (error) {
  handleError(error);
}

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Initialize Socket.IO on the server
const io = new Server(server, {
    cors: { 
        origin: '*'
    }
});

// Make `io` accessible in your app (controllers can use it)
app.set('io', io);

// Handle socket connections
io.on('connection', (socket) => {
  console.log('New WebSocket connection');

  // You can add custom event handling here, for example:
  socket.on('disconnect', () => {
    console.log('WebSocket disconnected');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
