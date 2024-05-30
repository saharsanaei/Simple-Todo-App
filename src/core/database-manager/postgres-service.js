import pkg from 'pg'; // Import the pg library as a default package
import dotenv from 'dotenv'; // Importing the dotenv library to manage environment variables

const { Pool } = pkg; // Extracting Pool from the imported package

dotenv.config(); // Load environment variables from .env file

// Create a new PostgreSQL pool using environment variables with SSL enabled
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false // Set to false to allow self-signed certificates
  }
});

// Function to execute a query and return the results
const executeQuery = async (query, values) => {
  const client = await pool.connect(); // Get a client from the pool
  try {
    const result = await client.query(query, values); // Execute the query
    return result.rows; // Return the rows of the result
  } finally {
    client.release(); // Release the client back to the pool
  }
};

export { executeQuery }; // Export the executeQuery function