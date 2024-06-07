import dotenv from 'dotenv';

dotenv.config();

export const secrets = {
    PGHOST: process.env.PGHOST,
    PGDATABASE: process.env.PGDATABASE,
    PGUSER: process.env.PGUSER,
    PGPASSWORD: process.env.PGPASSWORD,
    PORT: process.env.PORT
};