// Express Routing:
/*
Routing => How our application responds to client requests
based on a specific URL path and HTTP request method.
*/

// Step#01: Importing the "Express" package
import express from "express";

// Step#02: Creating an Express application
const app = express();

// Step#03: Defining the port number
const PORT = 3000;

// Step#04: Creating different routes using the .get() method

// URL => http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Welcome to our Express application!');
});

// URL => http://localhost:3000/about
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This is our Express application.</p>');
});

// URL => http://localhost:3000/courses
app.get('/courses', (req, res) => {
  res.json([
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'Express.js' },
    { id: 3, name: 'Vue.js' }
  ]);
});

// Step#05: Starting the Express server
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});

/*
Run the file:
    > node 02-basic-routing
*/