import express from 'express';
import path from 'path';

const UIRouter = express.Router();

const routeHandler = (
  route, file, htmlFilePathVar = '../../../server/UI'
) => UIRouter.get(route, (request, response) => response.sendFile(path.resolve(__dirname, `${htmlFilePathVar}/${file}`)));

routeHandler('/', 'index.html');

export default UIRouter;
