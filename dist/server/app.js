"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("../config/config"));

var _template = _interopRequireDefault(require("../../template"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
_mongoose.default.Promise = global.Promise;

_mongoose.default.connect(_config.default.mongoUri);

_mongoose.default.connection.on('error', function () {
  throw new Error("unable to connect to database: ".concat(_config.default.mongoUri));
});

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _cookieParser.default)());
app.use((0, _compression.default)());
app.use((0, _helmet.default)());
app.use((0, _cors.default)());
app.use('/api/v1', _user.default);
app.use('/api/v1', _auth.default);
app.get('/', function (req, res) {
  res.status(200).send((0, _template.default)());
}); // eslint-disable-next-line no-unused-vars

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      error: "".concat(err.name, ": ").concat(err.message)
    });
  }
});
/* eslint-disable no-console */

app.listen(_config.default.port, function (err) {
  if (err) {
    console.log(err);
  }

  console.info('Server started on port %s.', _config.default.port);
});
//# sourceMappingURL=app.js.map