"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Marks = _interopRequireDefault(require("../controllers/Marks"));

var _messageResponse = _interopRequireDefault(require("../helperFunctions/messageResponse"));

var _calculationValidator = _interopRequireDefault(require("../validator/calculationValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (request, response) {
  return (0, _messageResponse["default"])(response, 200, {
    message: "Welcome to BuzzFeed's Challenge API! Read the docs at /api-docs/ to get started"
  });
});
router.post('/saveCalculation', _calculationValidator["default"], _Marks["default"].calcSave);
var _default = router;
exports["default"] = _default;