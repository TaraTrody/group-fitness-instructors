"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3030,
  jwtSecret: process.env.JWT_SECRET || 'YOUR_secret_key',
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || "mongodb://".concat(process.env.IP || 'localhost', ":").concat(process.env.MONGO_PORT || '27017', "/mernproject")
};
var _default = config;
exports.default = _default;
//# sourceMappingURL=config.js.map