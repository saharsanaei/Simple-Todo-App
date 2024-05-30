import express from 'express'; // Importing the express library
import dotenv from 'dotenv'; // Importing the dotenv library to manage environment variables
import { router as tasksRouter } from './routes/tasks/index.js'; // Import the tasks router

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create a new Express application

app.use('/', express.static(process.cwd() + '/public')); // Serve static files from the public directory

app.use(tasksRouter); // Use the tasks router

const port = process.env.PORT; // Get the port from environment variables or use 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Start the server and log the port
});