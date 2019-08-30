"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _user = _interopRequireDefault(require("../db/models/user.model"));

var _dbErrorHandler = _interopRequireDefault(require("../utils/dbErrorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = function create(req, res, next) {
  console.log(req.body);
  var newUser = new _user.default(req.body);
  newUser.save(function (err, result) {
    if (err) {
      return res.status(400).json({
        error: _dbErrorHandler.default.getErrorMessage(err)
      });
    }

    res.status(200).json({
      message: 'Successfully signed up!'
    });
  });
};

var list = function list(req, res) {
  _user.default.find(function (err, user) {
    if (err) {
      return res.status(400).json({
        error: _dbErrorHandler.default.getErrorMessage(err)
      });
    }

    res.json(user);
  }).select('-hashed_password');
};

var userByID = function userByID(req, res, next, ID) {
  _user.default.findById().exec(function (err, user) {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      });
    }

    req.profile = user;
    next();
  });
};

var read = function read(req, res) {
  return res.json(req.profile);
};

var update = function update(req, res, next) {
  var user = req.profile;
  user = _lodash.default.extend(user, req.body);
  user.updated = Date.now();
  user.save(function (err) {
    if (err) {
      return res.status(400).json({
        error: _dbErrorHandler.default.getErrorMessage(err)
      });
    }

    user.hashed_password = undefined;
    res.json({
      message: 'User account updated',
      user: user
    });
  });
};

var remove = function remove(req, res, next) {
  var user = req.profile;
  user.deleteOne(function (err, deletedUser) {
    if (err) {
      return res.status(400).json({
        error: _dbErrorHandler.default.getErrorMessage(err)
      });
    }

    user.hashed_password = undefined;
    res.json({
      message: 'User account deleted',
      deletedUser: deletedUser
    });
  });
};

var _default = {
  create: create,
  list: list,
  userByID: userByID,
  read: read,
  update: update,
  remove: remove
};
exports.default = _default;
//# sourceMappingURL=user.controllers.js.map