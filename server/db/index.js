import { Pool } from 'pg';
import configJs from '../config/config';

const env = process.env.NODE_ENV || 'development';

const config = configJs[env];

const connectionString = config.DATABASE_URL || process.env.DATABASE_URL;

const pool = new Pool({
  connectionString
});


export default pool;
