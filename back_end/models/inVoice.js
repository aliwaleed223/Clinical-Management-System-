import mongoose from 'mongoose';

const { Schema } = mongoose;


const inVoiceSchema = new Schema({
inVoivceDate :{
type : Date,
required : true
},
creationDate:{
    type: Date,
    default: Date.now()
},
notes:{
    type : String,
    required:false
},
paymentMethod:{
    type : String,
    required:true
}

},
    {timestamps:true});

const inVoice = mongoose.model('inVoice', inVoiceSchema);
export default inVoice;
