"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + 'already exists';
  } catch (ex) {
    output = 'Unique field already exists';
  }

  return output;
};

var _default = {
  getErrorMessage: getErrorMessage
};
exports.default = _default;
//# sourceMappingURL=dbErrorHandler.js.map