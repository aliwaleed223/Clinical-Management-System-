import mongoose from 'mongoose';
import moment from 'moment';

const logSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    activityType: {
        type: String,
        required: true
    },
    relatedUser: {
        type: String,  
        required: true
    },
    activityResult: {
        type: String,
        enum: ['مكتمل', 'فشل', 'معلق'], 
        required: false
    },
    dateTime: {
        type: Date,
        default: Date.now
    },
});

logSchema.methods.toJSON = function() {
  const Logs = this.toObject();
  
  Logs.dateTime = moment(Logs.dateTime).format('YYYY/M/D h.mmA');
  
  return Logs;
};

export default mongoose.model('Log', logSchema);