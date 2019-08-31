module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/config/config.js":
/*!*******************************!*\
  !*** ../src/config/config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  env: "development" || false,
  port: process.env.PORT || 3030,
  jwtSecret: process.env.JWT_SECRET || 'mongodb+srv://STrody:<1Fb9CQpFiQ7pM9JB>@cluster0-nybw4.mongodb.net/test',
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || "mongodb://".concat(process.env.IP || 'localhost', ":").concat(process.env.MONGO_PORT || '27017', "/mernproject")
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "../src/server/app.js":
/*!****************************!*\
  !*** ../src/server/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/config */ "../src/config/config.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../template */ "../template.js");
/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/user.routes */ "../src/server/routes/user.routes.js");
/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/auth.routes */ "../src/server/routes/auth.routes.js");











var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
mongoose__WEBPACK_IMPORTED_MODULE_6___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_7__["default"].mongoUri);
mongoose__WEBPACK_IMPORTED_MODULE_6___default.a.connection.on('error', function () {
  throw new Error("unable to connect to database: ".concat(_config_config__WEBPACK_IMPORTED_MODULE_7__["default"].mongoUri));
});
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({
  extended: true
}));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());
app.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());
app.use('/api/v1', _routes_user_routes__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.use('/api/v1', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_10__["default"]);
app.get('/', function (req, res) {
  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_8__["default"])());
}); // eslint-disable-next-line no-unused-vars

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      error: "".concat(err.name, ": ").concat(err.message)
    });
  }
});
/* eslint-disable no-console */

app.listen(_config_config__WEBPACK_IMPORTED_MODULE_7__["default"].port, function (err) {
  if (err) {
    console.log(err);
  }

  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_7__["default"].port);
});

/***/ }),

/***/ "../src/server/controllers/auth.controllers.js":
/*!*****************************************************!*\
  !*** ../src/server/controllers/auth.controllers.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-jwt */ "express-jwt");
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/models/user.model */ "../src/server/db/models/user.model.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "../src/config/config.js");





var signin = function signin(req, res) {
  _db_models_user_model__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
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

    var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign({
      _id: user._id
    }, _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].jwtSecret);
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

var requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_1___default()({
  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].jwtSecret,
  requestProperty: 'auth'
});

var hasAuthorization = function hasAuthorization(req, res, next) {
  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  console.log(req.profile);
  console.log(req.auth);

  if (!authorized) {
    return res.status(403).json({
      error: 'User is not authorized'
    });
  }

  next();
};

/* harmony default export */ __webpack_exports__["default"] = ({
  signin: signin,
  signout: signout,
  requireSignin: requireSignin,
  hasAuthorization: hasAuthorization
});

/***/ }),

/***/ "../src/server/controllers/user.controllers.js":
/*!*****************************************************!*\
  !*** ../src/server/controllers/user.controllers.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/models/user.model */ "../src/server/db/models/user.model.js");
/* harmony import */ var _utils_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dbErrorHandler */ "../src/server/utils/dbErrorHandler.js");




var createUser = function createUser(req, res, next) {
  var newUser = new _db_models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"](req.body);
  console.log(newUser);
  newUser.save(function (err, result) {
    if (err) {
      return res.status(400).json({
        error: _utils_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__["default"].getErrorMessage(err)
      });
    }

    res.status(200).json({
      message: 'Successfully signed up!'
    });
  });
};

var getUserList = function getUserList(req, res) {
  _db_models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].find(function (err, user) {
    if (err) {
      return res.status(400).json({
        error: _utils_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__["default"].getErrorMessage(err)
      });
    }

    res.json(user);
  }).select('-password');
};

var userByID = function userByID(req, res, next, id) {
  _db_models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].findById(id).exec(function (err, user) {
    if (err || !user) return res.status('400').json({
      error: "User not found"
    });
    req.profile = user;
    next();
  });
};

var getUser = function getUser(req, res) {
  req.profile.password = undefined;
  return res.json(req.profile);
};

var updateUser = function updateUser(req, res, next) {
  var user = req.profile;
  user = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(user, req.body);
  user.updated = Date.now();
  user.save(function (err) {
    if (err) {
      return res.status(400).json({
        error: _utils_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__["default"].getErrorMessage(err)
      });
    }

    user.password = undefined;
    res.json({
      message: 'User account updated',
      user: user
    });
  });
};

var removeUser = function removeUser(req, res) {
  var user = req.profile;
  _db_models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].deleteOne(user, function (err, deletedUser) {
    if (err) {
      return res.status(400).json({
        error: _utils_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__["default"].getErrorMessage(err)
      });
    }

    user.password = undefined;
    res.json({
      message: 'User account deleted',
      deletedUser: deletedUser
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  createUser: createUser,
  getUserList: getUserList,
  userByID: userByID,
  getUser: getUser,
  updateUser: updateUser,
  removeUser: removeUser
});

/***/ }),

/***/ "../src/server/db/models/user.model.js":
/*!*********************************************!*\
  !*** ../src/server/db/models/user.model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);


var UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  firstName: {
    type: String,
    trim: true,
    min: [2, 'Name should be between 2 and 30 characters'],
    max: [30, 'Name should be between 3 and 30 characters'],
    required: 'First name is required'
  },
  lastName: {
    type: String,
    trim: true,
    min: [2, 'Name should be between 2 and 30 characters'],
    max: [30, 'Name should be between 3 and 30 characters'],
    required: 'Last name is required'
  },
  email: {
    type: String,
    unique: 'Email already exists',
    required: 'Email is required',
    // eslint-disable-next-line no-useless-escape
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use valid email address']
  },
  password: {
    type: String,
    required: 'Password is required',
    min: [8, 'Password must have at least 8 characters'],
    max: 160
  },
  userType: {
    type: String,
    enum: ['Instructor', 'Studio/Gym'],
    required: 'Please select'
  },
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
    bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(this.password, 10, function (err, hash) {
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
      return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(plaintextPassword, this.password);
    } catch (err) {
      throw err;
    }
  }
};
UserSchema.path('password').validate(function (v) {
  if (this.password && this.password < 8) {
    this.invalidate('password', 'Password must be at least 8 characters');
  }

  if (this.isNew && !this.password) {
    this.invalidate('password', 'Password is required.');
  }
}, null);
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema));

/***/ }),

/***/ "../src/server/routes/auth.routes.js":
/*!*******************************************!*\
  !*** ../src/server/routes/auth.routes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_auth_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controllers */ "../src/server/controllers/auth.controllers.js");


var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
router.post('/auth/signin', _controllers_auth_controllers__WEBPACK_IMPORTED_MODULE_1__["default"].signin);
router.get('/auth/signout', _controllers_auth_controllers__WEBPACK_IMPORTED_MODULE_1__["default"].signout);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "../src/server/routes/user.routes.js":
/*!*******************************************!*\
  !*** ../src/server/routes/user.routes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_user_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controllers */ "../src/server/controllers/user.controllers.js");
/* harmony import */ var _controllers_auth_controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controllers */ "../src/server/controllers/auth.controllers.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
router.route('/users').get(_controllers_user_controllers__WEBPACK_IMPORTED_MODULE_1__["default"].getUserList).post(_controllers_user_controllers__WEBPACK_IMPORTED_MODULE_1__["default"].createUser);
router.route('/users/:userId').get(_controllers_auth_controllers__WEBPACK_IMPORTED_MODULE_2__["default"].requireSignin, _controllers_user_controllers__WEBPACK_IMPORTED_MODULE_1__["default"].getUser).put(_controllers_auth_controllers__WEBPACK_IMPORTED_MODULE_2__["default"].requireSignin, _controllers_auth_controllers__WEBPACK_IMPORTED_MODULE_2__["default"].hasAuthorization, _controllers_user_controllers__WEBPACK_IMPORTED_MODULE_1__["default"].updateUser).delete(_controllers_auth_controllers__WEBPACK_IMPORTED_MODULE_2__["default"].requireSignin, _controllers_auth_controllers__WEBPACK_IMPORTED_MODULE_2__["default"].hasAuthorization, _controllers_user_controllers__WEBPACK_IMPORTED_MODULE_1__["default"].removeUser);
router.param('userId', _controllers_user_controllers__WEBPACK_IMPORTED_MODULE_1__["default"].userByID);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "../src/server/utils/dbErrorHandler.js":
/*!*********************************************!*\
  !*** ../src/server/utils/dbErrorHandler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getErrorMessage = function getErrorMessage(err) {
  var message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = getUniqueErrorMessage(err);
        break;

      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};

var getUniqueErrorMessage = function getUniqueErrorMessage(err) {
  var output;

  try {
    var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));
    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';
  } catch (ex) {
    output = 'Unique field already exists';
  }

  return output;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getErrorMessage: getErrorMessage
});

/***/ }),

/***/ "../template.js":
/*!**********************!*\
  !*** ../template.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"/>\n  <title>Document</title>\n</head>\n<body>\n  <p>Hello Big Shantara World</p>\n</body>\n</html>";
});

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ../src/server/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shantaratrody/development/group-fitness-instructors/src/server/app.js */"../src/server/app.js");


/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map