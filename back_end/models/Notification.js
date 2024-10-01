import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true, 
  },
  requestId: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'RequestedDrug',
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
