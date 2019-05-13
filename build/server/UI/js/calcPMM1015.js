"use strict";

var floatConv = function floatConv(x) {
  var fixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return Number.parseFloat(x).toFixed(fixed);
};

var getRank = function getRank(total) {
  if (total >= 80.00) {
    return '1st Class';
  }

  if (total >= 70.00 && total < 80.00) {
    return 'Higher 2nd Class (2:1)';
  }

  if (total >= 60.00 && total < 70.00) {
    return 'Lower 2nd Class (2:2)';
  }

  if (total >= 50.00 && total < 60.00) {
    return '3rd Class';
  }

  if (total < 50.00) {
    return 'Fail';
  }
};

var calcSubmit = function calcSubmit() {
  // presentationMark, proposalMark, reportMark, totalMark
  var form = document.getElementById('calcForm');

  if (isFinite(form.elements.total.value) && isFinite(form.elements.presentation.value) && isFinite(form.elements.proposal.value)) {
    var report = form.elements.total.value - form.elements.presentation.value - form.elements.proposal.value;
    var total = floatConv(form.elements.presentation.value * 0.15 + report * 0.80 + form.elements.proposal.value * 0.05);
    document.getElementById('total').innerText = total;
    document.getElementById('rank').innerText = getRank(total);
    fetch('/api/v1/saveCalculation', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        presentationMark: floatConv(form.elements.presentation.value),
        proposalMark: floatConv(form.elements.proposal.value),
        reportMark: floatConv(report),
        totalMark: floatConv(total)
      })
    }).then(function (response) {
      return {
        jsonObj: response.json(),
        status: response.status
      };
    }).then(function (_ref) {
      var jsonObj = _ref.jsonObj,
          status = _ref.status;

      if (status !== 200) {
        jsonObj.then(function (result) {
          console.log(result.message);
        });
      }
    })["catch"](function (err) {
      return err;
    });
  }
};