import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true},
  password: { type: String, required: true },
  isOnline: { type: Boolean, default: false },
  role: { type: String, required: true, enum: ['مستخدم', 'مدير' , 'طبيب', 'صيدلاني','موظف استقبال','أمين المخزن'], default: 'user' }
});

// Hash password before saving the user
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
      this.password =await bcrypt.hash(this.password, 10);
      return next();

    } catch (error) {
      return next(error);
    }
});

const User = mongoose.model('User', userSchema);

export default User;
  