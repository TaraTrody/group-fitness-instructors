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
  hashed_password: {
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

UserSchema.virtual('password')
  .set((password) => {
    this._password = password;
    this.hashed_password = this.encryptPassword(password);
  })
  .get(() => this._password);


UserSchema.methods = {
  encryptPassword(password) {
    if (!password) {
      return '';
    }
    try {
      return bcrypt.hash(password, 12);
    } catch (err) {
      return '';
    }
  },
  authenticate(plaintextPassword) {
    try {
      return bcrypt.compare(plaintextPassword, this.hashed_password);
    } catch (err) {
      throw err;
    }
  },
};

UserSchema.path('hashed_password').validate( (v)=> {
  if(this._password && this._password < 8) {
    this.invalidate('password', 'Password must be at least 8 characters')
  } 
  if(this.isNew && !this._password) {
    this.invalidate('password', 'Password is required.')
  }
}, null);

export default mongoose.model('User', UserSchema);
