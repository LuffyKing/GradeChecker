import fs from 'fs';
import configJs from '../config/config';


const env = process.env.NODE_ENV || 'development';

const config = configJs[env];

const password = config.PASSWORD || process.env.PASSWORD;

const username = config.USERNAME || process.env.USERNAME;

let fileContent = fs.readFileSync('./server/db/dbTemplate.sql', 'utf8');

fileContent = fileContent.replace('REPLACE_PASSWORD', password);

fileContent = fileContent.replace(/REPLACE_USERNAME/g, username);

fs.writeFileSync('./server/db/db.sql', fileContent);
