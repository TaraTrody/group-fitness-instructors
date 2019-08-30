"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user.controllers"));

var _auth = _interopRequireDefault(require("../controllers/auth.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route('/users').get(_user.default.list).post(_user.default.create);
router.route('/users/:userId').get(_auth.default.requireSignin, _user.default.read).put(_auth.default.requireSignin, _auth.default.hasAuthorization, _user.default.update).delete(_auth.default.requireSignin, _auth.default.hasAuthorization, _user.default.remove);
router.param('userId', _user.default.userByID);
var _default = router;
exports.default = _default;
//# sourceMappingURL=user.routes.js.map