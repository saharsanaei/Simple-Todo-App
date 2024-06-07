import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
import { secrets } from '../secrets/index.js';

dotenv.config();

const pool = new Pool({
    user: secrets.PGUSER,
    host: secrets.PGHOST,
    database: secrets.PGDATABASE,
    password: secrets.PGPASSWORD,
    port: 5432,
    ssl: {
      rejectUnauthorized: false // Set to false to allow self-signed certificates
    }
});

export const query = async (text, params) => {
    const res = await pool.query(text, params);
    return res.rows;
};