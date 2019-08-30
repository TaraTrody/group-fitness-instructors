"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _user = _interopRequireDefault(require("../db/models/user.model"));

var _config = _interopRequireDefault(require("../../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signin = function signin(req, res) {
  _user.default.findOne({
    'email': req.body.email
  }, function (err, user) {
    if (err || !user) {
      return res.status(401).json({
        message: 'User not found'
      });
    }

    if (!user.authenticate(req.body.password)) {
      return res.status(401).json({
        message: "Email and password don't match"
      });
    }

    var token = _jsonwebtoken.default.sign({
      _id: user._id
    }, _config.default.jwtSecret);

    res.cookie("t", token, {
      expire: new Date() + 9999
    });
    return res.json({
      token: token,
      user: {
        _id: user._id,
        lastName: user.lastName,
        email: user.email
      }
    });
  });
};

var signout = function signout(req, res) {
  res.clearCookie('t');
  return res.status(200).json({
    message: 'Successfully signed out'
  });
};

var requireSignin = (0, _expressJwt.default)({
  secret: _config.default.jwtSecret,
  requestProperty: 'auth'
});

var hasAuthorization = function hasAuthorization(req, res, next) {
  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!authorized) {
    //why use this syntax
    return res.status(403).json({
      error: 'User is not authorized'
    });
  }

  next();
};

var _default = {
  signin: signin,
  signout: signout,
  requireSignin: requireSignin,
  hasAuthorization: hasAuthorization
};
exports.default = _default;
//# sourceMappingURL=auth.controllers.js.map