import express from 'express';
import Marks from '../controllers/Marks';
import messageResponse from '../helperFunctions/messageResponse';
import calculationValidator from '../validator/calculationValidator'

const router = express.Router();

router.get('/', (request, response) => messageResponse(response, 200, {
  message: "Welcome to BuzzFeed's Challenge API! Read the docs at /api-docs/ to get started"
}));

router.post('/saveCalculation', calculationValidator, Marks.calcSave);

export default router;
