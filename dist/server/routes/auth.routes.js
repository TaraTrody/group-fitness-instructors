"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controllers/auth.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/auth/signin', _auth.default.signin);
router.get('auth/signout', _auth.default.signout);
var _default = router;
exports.default = _default;
//# sourceMappingURL=auth.routes.js.map