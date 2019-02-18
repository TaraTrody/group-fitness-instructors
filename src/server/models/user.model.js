import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    min: [2, 'Name should be between 2 and 30 characters'],
    max: [30, 'Name should be between 3 and 30 characters'],
    required: 'First name is required',
  },
  lastName: {
    type: String,
    required: 'Last name is required',
    min: [2, 'Name should be between 2 and 30 characters'],
    max: [30, 'Name should be between 3 and 30 characters'],
  },
  email: {
    type: String,
    unique: true,
    required: 'Email is required',
    // eslint-disable-next-line no-useless-escape
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  password: {
    type: String,
    required: 'Password is required',
    min: [8, 'Password must have at least 8 characters'],
    max: 160,
  },

  userType: {
    type: String,
    enum: ['Instructor', 'Studio/Gym'],
    required: 'Please select',
  },

  created: {
    type: Date,
    default: Date.now,
  },

  updated: {
    type: Date,
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hash = await bcrypt.hashAsync(this.password, 12);

    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

UserSchema.methods = {
  authenticate(plaintextPassword) {
    return bcrypt.compare(plaintextPassword, this.password);
  },
};

export default mongoose.model('User', UserSchema);
