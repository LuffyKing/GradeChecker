"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var env = process.env.NODE_ENV || 'development';
var config = _config["default"][env];
var password = config.PASSWORD || process.env.PASSWORD;
var username = config.USERNAME || process.env.USERNAME;

var fileContent = _fs["default"].readFileSync('./server/db/dbTemplate.sql', 'utf8');

fileContent = fileContent.replace('REPLACE_PASSWORD', password);
fileContent = fileContent.replace(/REPLACE_USERNAME/g, username);

_fs["default"].writeFileSync('./server/db/db.sql', fileContent);