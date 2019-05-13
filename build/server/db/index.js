"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _config = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var env = process.env.NODE_ENV || 'development';
var config = _config["default"][env];
var connectionString = config.DATABASE_URL || process.env.DATABASE_URL;
var pool = new _pg.Pool({
  connectionString: connectionString
});
var _default = pool;
exports["default"] = _default;