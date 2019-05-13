"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UIRouter = _express["default"].Router();

var routeHandler = function routeHandler(route, file) {
  var htmlFilePathVar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '../../../server/UI';
  return UIRouter.get(route, function (request, response) {
    return response.sendFile(_path["default"].resolve(__dirname, "".concat(htmlFilePathVar, "/").concat(file)));
  });
};

routeHandler('/', 'index.html');
var _default = UIRouter;
exports["default"] = _default;