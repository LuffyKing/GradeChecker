import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import configJs from './config/config';
import router from './router';
import UIRouter from './UIRouter';

const env = process.env.NODE_ENV || 'development';

const config = configJs[env];

const app = express();

app.use(express.static(path.resolve(__dirname, '../../server/UI')));

const port = config.PORT || process.env.PORT;

app.use(helmet());

app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.use('/api/v1', router);

app.use('/', UIRouter);

app.listen(port);
