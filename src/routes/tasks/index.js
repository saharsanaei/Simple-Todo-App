import express from 'express'; // Importing the express library
import { getAllTasks } from '../../model/tasks/index.js'; // Import the getAllTasks function

const router = express.Router(); // Create a new router

// Define a route to get all tasks
router.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await getAllTasks(); // Get all tasks from the database
    res.json(tasks); // Send the tasks as a JSON response
  } catch (error) {
    console.error('Error fetching tasks:', error); // Log the error to the console
    res.status(500).json({ error: 'Internal server error' }); // Send an error response
  }
});

export { router }; // Export the router