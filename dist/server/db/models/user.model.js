"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.default.Schema({
  // firstName: {
  //   type: String,
  //   min: [2, 'Name should be between 2 and 30 characters'],
  //   max: [30, 'Name should be between 3 and 30 characters'],
  //   required: 'First name is required',
  // },
  // lastName: {
  //   type: String,
  //   required: 'Last name is required',
  //   min: [2, 'Name should be between 2 and 30 characters'],
  //   max: [30, 'Name should be between 3 and 30 characters'],
  // },
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    type: String,
    unique: true,
    required: 'Email is required',
    // eslint-disable-next-line no-useless-escape
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    required: 'Password is required',
    min: [8, 'Password must have at least 8 characters'],
    max: 160
  },
  // userType: {
  //   type: String,
  //   enum: ['Instructor', 'Studio/Gym'],
  //   required: 'Please select',
  // },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  }
}); // eslint-disable-next-line consistent-return

UserSchema.pre("save", function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    _bcrypt.default.hash(this.password, 10, function (err, hash) {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  } catch (err) {
    next(err);
  }
});
UserSchema.methods = {
  authenticate: function authenticate(plaintextPassword) {
    try {
      return _bcrypt.default.compare(plaintextPassword, this.hashed_password);
    } catch (err) {
      throw err;
    }
  }
};
UserSchema.path('password').validate(function (v) {
  if (_this.password && _this.password < 8) {
    _this.invalidate('password', 'Password must be at least 8 characters');
  }

  if (_this.isNew && !_this.password) {
    _this.invalidate('password', 'Password is required.');
  }
}, null);

var _default = _mongoose.default.model('User', UserSchema);

exports.default = _default;
//# sourceMappingURL=user.model.js.map