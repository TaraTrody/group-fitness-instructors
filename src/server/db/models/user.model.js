import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    min: [2, 'Name should be between 2 and 30 characters'],
    max: [30, 'Name should be between 3 and 30 characters'],
    required: 'First name is required',
  },
  lastName: {
    type: String,
    trim: true,

    min: [2, 'Name should be between 2 and 30 characters'],
    max: [30, 'Name should be between 3 and 30 characters'],
    required: 'Last name is required',
  },

  email: {
    type: String,
    unique: 'Email already exists',
    required: 'Email is required',
    // eslint-disable-next-line no-useless-escape
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use valid email address'],
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

// eslint-disable-next-line consistent-return

UserSchema.pre("save", function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    bcrypt.hash(this.password, 10, function (err, hash) {
      if (err) return next(err)
      this.password = hash
      next()

    })

  } catch (err) {
    next(err);
  }
});

UserSchema.methods = {


  authenticate(plaintextPassword) {
    try {
      return bcrypt.compare(plaintextPassword, this.password);
    } catch (err) {
      throw err;
    }
  },
};

UserSchema.path('password').validate(function (v) {
  if (this.password && this.password < 8) {
    this.invalidate('password', 'Password must be at least 8 characters')
  }
  if (this.isNew && !this.password) {
    this.invalidate('password', 'Password is required.')
  }
}, null);

export default mongoose.model('User', UserSchema);
