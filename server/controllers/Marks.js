import pool from '../db';
import messageResponse from '../helperFunctions/messageResponse';

const Marks = {
  /**
    * It gets all the articles on the application
    * @param {Object} request - request object containing params and body
    * @param {Object} response - response object that conveys the result of the request
    * @returns {Object} - response object that has a status code of 200 and 404 error if no
    * articles are found.
    */
  calcSave: (request, response) => {
    const {
      ipAddress,
      presentationMark,
      proposalMark,
      reportMark,
      totalMark
    } = request.body;
    const query = 'INSERT INTO MARKS(IP_ADDRESS,PRESENTATION_MARK,PROPOSAL_MARK, REPORT_MARK, TOTAL_MARK) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (IP_ADDRESS) DO UPDATE SET PRESENTATION_MARK=EXCLUDED.PRESENTATION_MARK,PROPOSAL_MARK=EXCLUDED.PROPOSAL_MARK, REPORT_MARK=EXCLUDED.REPORT_MARK, TOTAL_MARK=EXCLUDED.TOTAL_MARK;';
    const valueArray = [ipAddress, presentationMark, proposalMark, reportMark, totalMark];
    pool.query(query, valueArray)
      .then(() => messageResponse(response, 200, {
        message: 'Calculation saved'
      }))
      .catch(error => setImmediate(() => messageResponse(response, 500, {
        message: error.stack
      })));
  }
};

export default Marks;
