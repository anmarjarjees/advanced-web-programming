// Express Query Parameters:
/*
Query Parameters => Values passed through the URL after the "?" symbol.
*/

// Step#01: Importing the "Express" package
import express from "express";

// Step#02: Creating an Express application
const app = express();

// Step#03: Defining the port number
const PORT = 3000;

// Creating an array of objects:
/*
- Each element (course) is an object
- Each object represents one course
- Each course (as an object) has two properties: id and name with their values
*/
const courses = [
    { id: 1, name: 'HTML & CSS' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Node.js' },
    { id: 4, name: 'Express.js' },
    { id: 5, name: 'MySQL' },
    { id: 6, name: 'Vue.js' },
];

/*
Query Parameters:
*****************
Unlike route parameters, query parameters are not part of the route path.
They are added to the URL after the "?" symbol.

Example:
URL: http://localhost:3000/courses?name=JavaScript

- ? => indicates the beginning of the query string
- name => is the query parameter (key)
- JavaScript => is the value of the query parameter (no quotations)

We can access query parameters using the "query" property of the "req" object:

    > req.query.name => "JavaScript"

Notice:
- We can use "&" to add multiple query parameters to the same URL.
- Query parameters are optional and can be used for searching, filtering, sorting, etc.

*/

// Step#04: Creating a route using query parameters

// URL => http://localhost:3000/courses
// URL => http://localhost:3000/courses?name=JavaScript
// URL => http://localhost:3000/courses?name=js
app.get('/courses', (req, res) => {

    // Getting the query parameter from the URL using the "query" property of "req" object:
    const searchTerm = req.query.name; // "name" => is the query parameter key

    /*
    Examples:
    - /courses?name=JavaScript => req.query.name => "JavaScript"
    - /courses?name=Node.js => req.query.name => "Node.js"
    - /courses?name=js => req.query.name => "js"

    Notice:
    If the query parameter is not provided, its value will be undefined.
    */

    // If no search term is provided, return all courses
    if (searchTerm === undefined) {
        return res.json(courses);
    }

    /*
    Since query parameters come from user input, we should validate them.

    In our example, we expect the "name" query parameter to be a single string.
    If it is missing a value or is not a string, we send a 400 response.
    */
    if (typeof searchTerm !== 'string' || searchTerm.trim() === '') {
        return res.status(400).send('Please provide a valid course name');
    }

    // Searching for courses that match the requested name
    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    /*
    Array .filter() method:
    ***********************
    - .filter() searches through the array and checks each element against a condition.
    - If the condition is met, the element is included in the new array.
    - Unlike .find(), which returns only the first matching element,
      .filter() returns all matching elements.
    - If no matching elements are found, it returns an empty array.

    To summarize:
    *************
    - .find() method: => returns the first matching element
    - .filter() method: 
        => returns a new array containing all matching elements
        => returns a new empty array [] if no matching element

    Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    Notice:
    - We use .toLowerCase() in "course.name.toLowerCase()" to make the search case-insensitive:
        - javascript, JavaScript, or JAVASCRIPT
    - We use .includes() to find a matching name even when the search term is only part of the course name.
    */

    // Sending the filtered courses as a JSON response
    res.json(filteredCourses);
});

/*
Types of req properties:
- req.params => values from the route path
- req.query => values from the query string
- req.body => values sent in the request body (we'll cover this in REST API and CRUD)
*/

// Step#05: Starting the Express server
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});

/*
Run the file:
    > node 05-query-parameters

In GitHub Codespaces, manually add /courses or the query parameters
to the forwarded port URL.

Trying different URLs:
**********************
- /courses
  Returns all courses

- /courses?name=JavaScript
  Returns the JavaScript course

- /courses?name=js
  Returns Node.js, Express.js, and Vue.js

- /courses?name=python
  Returns an empty array because no matching course is found

- /courses?name=
  Returns a 400 response because the search term is empty
*/