"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("./config/config"));

var _router = _interopRequireDefault(require("./router"));

var _UIRouter = _interopRequireDefault(require("./UIRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var env = process.env.NODE_ENV || 'development';
var config = _config["default"][env];
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../../server/UI')));
var port = config.PORT || process.env.PORT;
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])({
  credentials: true,
  origin: true
}));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));
app.use('/api/v1', _router["default"]);
app.use('/', _UIRouter["default"]);
app.listen(port);