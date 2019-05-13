"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validator = _interopRequireDefault(require("validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
* It validates the topLimit parameter to ensure it is an integer
* @param {Object} request - request object containing params and body
* @param {Object} response - response object that conveys the result of the request
* @param {Object} next - middleware that calls the net middleware in the stack
* @returns {Object} - response object that has a status code of 422 may returned if the
* topLimit is invalid
*/
var calculationValidator = function calculationValidator(request, response, next) {
  var ip = request.headers['X-Forwarded-For'] || request.ip;

  if (!_validator["default"].isIP(ip)) {
    return response.status(422).send({
      message: 'IP Address error'
    });
  }

  var floatErrors = Object.keys(request.body).filter(function (elm) {
    return !_validator["default"].isFloat(request.body[elm], {
      min: 0.00,
      max: 100.00
    });
  });

  if (floatErrors.length > 0) {
    var floatErrorsValues = floatErrors.reduce(function (sum, current) {
      return "".concat(sum, ", ").concat(current);
    }, '');
    return response.status(422).send({
      message: "Error: the following values are not floats between 0.00 and 100: ".concat(floatErrorsValues)
    });
  }

  request.body.ipAddress = ip;
  next();
};

var _default = calculationValidator;
exports["default"] = _default;