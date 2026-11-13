// Express Route Parameters:
/*
Route Parameters => Values passed directly in the URL path.
*/

// Step#01: Importing the "Express" package
import express from "express";

// Step#02: Creating an Express application
const app = express();

// Step#03: Defining the port number
const PORT = 3000;

// Step#04: Creating a route with a parameter
// URL => http://localhost:3000/courses/1
// URL => http://localhost:3000/courses/2
app.get('/courses/:id', (req, res) => {

    // Find the requested course
    // Getting the route parameter from the URL
    const courseId = req.params.id;
    /*
    With express, we can access route parameters through req.params
    Examples:
    - http://localhost:3000/courses/1 ==> req.params.id => "1"
    - http://localhost:3000/courses/2 ==> req.params.id => "2"
    - http://localhost:3000/courses/3 ==> req.params.id => "3"
  
    Notice that the value is a "string", even when it looks like a number
    */

    // We use an ES6 template literal to include the parameter value in our response:
    res.send(`Course ID: ${courseId}`);
});

/*
 - /courses/ => is the fixed part of the URL
 - :id => is a parameter (acting as a placeholder for a value)

*/

// Step#05: Starting the Express server
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});

/*
Run the file:
    > node 03-route-parameters

In GitHub Codespaces, manually add /courses/1 to the forwarded port URL:
https://congenial-winner-7x6rvq7g9wh75x-3000.app.github.dev/courses/1
*/
