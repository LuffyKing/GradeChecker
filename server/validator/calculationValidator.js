import validator from 'validator';
/**
* It validates the topLimit parameter to ensure it is an integer
* @param {Object} request - request object containing params and body
* @param {Object} response - response object that conveys the result of the request
* @param {Object} next - middleware that calls the net middleware in the stack
* @returns {Object} - response object that has a status code of 422 may returned if the
* topLimit is invalid
*/
const calculationValidator = (request, response, next) => {
  const ip = request.headers['x-real-ip'] || request.connection.remoteAddress;
  if (!validator.isIP(ip)) {
    return response.status(422).send({ message: 'IP Address error' });
  }
  const floatErrors = Object.keys(request.body).filter(elm => !validator.isFloat(
    request.body[elm], { min: 0.00, max: 100.00 }
  ));
  if (floatErrors.length > 0) {
    const floatErrorsValues = floatErrors.reduce((sum, current) => `${sum}, ${current}`, '');
    return response.status(422).send({ message: `Error: the following values are not floats between 0.00 and 100: ${floatErrorsValues}` });
  }
  request.body.ipAddress = ip;
  next();
};
export default calculationValidator;
