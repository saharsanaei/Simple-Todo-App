import { executeQuery } from '../../core/database-manager/postgres-service.js'; // Import the executeQuery function

// Function to get all tasks from the database
const getAllTasks = async () => {
  const query = 'SELECT * FROM tasks'; // SQL query to select all tasks
  return executeQuery(query); // Execute the query and return the results
};

export { getAllTasks }; // Export the getAllTasks function