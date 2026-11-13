
// Express Route Data Lookup:
/*
Using route parameters to find and return specific data from an array.
*/

/*
The basic essential 3 steps: 
1. Import Express
2. Create an Express app
3. Define the port number for our application
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
Arrays in JS have the method .find() to find an element.

MDN Example:

const array = [5, 12, 8, 130, 44];
const found = array.find((element) => element > 10);
console.log(found);
// Expected output: 12

If the condition/criteria is not fulfilled,
JS will return "undefined"

Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/

// In our example, to find the course with ID 2:
const foundCourse = courses.find(course => course.id === 2);
console.log(foundCourse);

/*
- courses.find() searches through the array
- course is just a parameter that represents each course object when searching the array (could be any name)
- course.id === 2 checks if the current course object's id property has the value of 2
- if the condition/criteria is met (match is found) => return the object
- if the condition/criteria is not met (match is not found) => return undefined

Notice that .find() returns only the first matching element.
*/

// Step#04: Finding a course using its ID
app.get('/courses/:id', (req, res) => {

    // Getting the route parameter from the URL using the "params" property of "req" object:
    const courseId = Number(req.params.id);
    /*
    Remember, req.params.id => returns a string
    So URL endpoint "/courses/2" => returns "2" as a string

    The course IDs in our array "courses" are numbers,
    so we should convert the route parameter from string to number.
    JS provides us with: Number(), parseInt() for integer values, parseFloat() for decimal values.
    Between Number() and parseInt(), we picked Number()
    because it converts the entire string into a number.
    For example:
    Number("2") => 2
    Number("2abc") => NaN
    parseInt("2abc") => 2
    */

    // Finding the course that matches the requested ID
    const course = courses.find(c => c.id === courseId);

    /*
    As programmers, we always need to think about what if...
    so if the user asked for a course with ID 8 (which is not found),
    we should send an error message to the client,
    otherwise we can just send the JSON response.
    */
    // Checking if the requested course exists (based on its id)
    if (!course) {
        return res.status(404).send('The course was not found');
        /*
        Using res.status(value).send('our message');

        Link: https://expressjs.com/en/5x/api/response/#res.send

        Don't forget that the "return" keyword in JavaScript:
        - can return a value (if needed)
        - immediately terminates the execution of the current function
        */

        /*
        HTTP status response value of 404 is the standard status code for "Not Found".
        Link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404
        */
    }

    // Sending the course information as a JSON response
    res.json(course);

    /*
    Notice that we can send the course using the normal send() method:
        - res.send() => a general-purpose response method. It can send strings, buffers*, and objects
            > res.send(course);
    But using:
        - res.json() => explicitly sends a JSON response and sets the appropriate Content-Type header*
            > res.json(course);

    Both methods can send an object as JSON in Express,
    but res.json() clearly communicates what our API is returning (makes our intention clearer).

    - Buffer:
        - Buffer:
            A Node.js object used to store and work with binary data (raw bytes), rather than ordinary text.
            Examples: Images, audio/video files, PDFs

    - Content-Type header:
        Tells the browser or client what type of data the server is sending.
        Examples:
            - application/json => the response contains JSON data
            - text/html => the response contains HTML
            - text/plain => the response contains plain text
    */
});

// Route explanation:
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
    > node 04-data-lookup

In GitHub Codespaces, manually add /courses/1 to the forwarded port URL:
https://congenial-winner-7x6rvq7g9wh75x-3000.app.github.dev/courses/1

Try different IDs:
- /courses/1
- /courses/2
- /courses/8 (course not found - 404 response)
*/