"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db"));

var _messageResponse = _interopRequireDefault(require("../helperFunctions/messageResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Marks = {
  /**
    * It gets all the articles on the application
    * @param {Object} request - request object containing params and body
    * @param {Object} response - response object that conveys the result of the request
    * @returns {Object} - response object that has a status code of 200 and 404 error if no
    * articles are found.
    */
  calcSave: function calcSave(request, response) {
    var _request$body = request.body,
        ipAddress = _request$body.ipAddress,
        presentationMark = _request$body.presentationMark,
        proposalMark = _request$body.proposalMark,
        reportMark = _request$body.reportMark,
        totalMark = _request$body.totalMark;
    var query = 'INSERT INTO MARKS(IP_ADDRESS,PRESENTATION_MARK,PROPOSAL_MARK, REPORT_MARK, TOTAL_MARK) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (IP_ADDRESS) DO UPDATE SET PRESENTATION_MARK=EXCLUDED.PRESENTATION_MARK,PROPOSAL_MARK=EXCLUDED.PROPOSAL_MARK, REPORT_MARK=EXCLUDED.REPORT_MARK, TOTAL_MARK=EXCLUDED.TOTAL_MARK;';
    var valueArray = [ipAddress, presentationMark, proposalMark, reportMark, totalMark];

    _db["default"].query(query, valueArray).then(function () {
      return (0, _messageResponse["default"])(response, 200, {
        message: 'Calculation saved'
      });
    })["catch"](function (error) {
      return setImmediate(function () {
        return (0, _messageResponse["default"])(response, 500, {
          message: error.stack
        });
      });
    });
  }
};
var _default = Marks;
exports["default"] = _default;