/*
REST API - HTTP Methods:
************************
HTTP methods indicate what operation the client wants to perform
when sending a request to the server.

The four main HTTP methods we will use for CRUD operations:
    - GET => Retrieve data
    - POST => Add new data
    - PUT => Update existing data
    - DELETE => Delete data

Remember that "CRUD" stands for:
- Create
- Read
- Update
- Delete

In this example, we will use a list of courses
and implement these operations using Express.
*/

// Step#01: Importing the Express package
import express from "express";

// Step#02: Creating an Express application
const app = express();

// Step#03: Defining the port number
const PORT = 3000;

/*
Express JSON middleware:
************************
When Vue.js sends a POST (Create) or PUT (Update) request containing JSON data,
Express needs to read and understand the incoming request body.

- express.json() is built-in Express middleware
- It parses incoming JSON request bodies
- The parsed data becomes available through req.body

For example, if the client sends:
    > { "name": "Vue.js" }

We can access the course name using:
    > req.body.name

NOTE:
This middleware must be registered before the routes
that need to access the incoming JSON data.
*/

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Step#04: Creating a sample array of courses
let courses = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Node.js" },
    { id: 3, name: "C#" },
    { id: 4, name: "ASP.NET Core" }
];
/*
NOTE:
Courses is our temporary data store (the data exists only in memory)

This means:
- We can add, update, and delete courses while the server is running
- When we restart the server, the original sample data is loaded again
- Later, we will use MySQL to store our data permanently
*/

// NOTE:Keeping track of the next course ID
let nextCourseId = 5;
/*
Reason for "nextCourseId":
**************************
We keep track of the next available ID.
This prevents us from reusing an ID when adding a new course,
even if another course has been deleted.
*/

// Step#05: GET - Retrieve all courses
// URL => http://localhost:3000/api/courses
app.get("/api/courses", (req, res) => {
    res.json(courses);
});
/*
To review:
- app.get() handles HTTP GET requests.
- "/api/courses" is the endpoint used to request the courses.
- res.json(courses) sends the entire courses array back to the client as JSON.
*/

// Step#06: GET - Retrieve a specific course by ID
// URL => http://localhost:3000/api/courses/2
app.get("/api/courses/:id", (req, res) => {
    // Getting the course ID from the route parameter:
    const courseId = Number(req.params.id);
    /*
    Example => GET /api/courses/2
    req.params.id => To retrieve the ID from the route parameter as a string ("2")
    Number() => To convert the string "2" into the number 2
    Notice that we have to convert it because our course IDs in the array are numbers
    */

    // Finding the requested course in the courses array
    const course = courses.find(c => c.id === courseId);
    /*
    The JavaScript array method "find()":
        - Searches the array for an element that matches the given condition
        - c represents the current course being checked
        - c.id === courseId checks whether the current course ID matches the requested ID
        - Returns the first matching course, or undefined if no course is found
    */

    // Checking whether the course exists:
    // If the course does NOT exist => return status code 404
    if (!course) {
        return res.status(404).json({ message: "Cannot find this course!" });
        /*
        - 404 means Not Found
        - .json() sends the error message as a JSON response
        */
    }

    // Else (if course exists):
    // Sending the requested course as JSON
    res.json(course);
});

// POST (CREATE):
// Step#07: POST => Adding a new course
app.post("/api/courses", (req, res) => {
    // Getting the course name from the request body
    const courseName = req.body.name;
    /*
    Notice that the express.json() middleware allows Express
    to read the incoming JSON data through req.body
    */

    // Creating a new course (object)
    const newCourse = {
        id: nextCourseId++,
        // This assigns the current ID to the new course, then increments it by 1
        name: courseName
    };

    // Adding the new course to the "courses" array
    // using .push() array method:
    courses.push(newCourse);

    // Sending the new course back to the client
    res.status(201).json(newCourse);
});

// PUT (UPDATE): Using app.put() to handle HTTP PUT requests
// Step#08: PUT => Updating an existing course
app.put("/api/courses/:id", (req, res) => {

    // Getting the course ID from the route parameter
    const courseId = Number(req.params.id);

    // Finding the requested course
    const course = courses.find(c => c.id === courseId);

    // Checking whether the course exists
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    // Updating the course name
    course.name = req.body.name;
    /*
    Remember that our array "courses":
    - Is an array of course objects
    - Each course object has two properties: id and name
    - The variable "course" represents one course object
    - We can access each property using the dot notation:
        > course.name
        > course.id

    Updating course.name changes the name of that course object
    inside our courses array.
    */

    // Sending the updated course back to the client
    res.json(course);
    /*
    Output example:
        {
            "id": 2,
            "name": "Vue.js Advanced"
        }
    */
});

// Step#09: DELETE => Deleting an existing course
app.delete("/api/courses/:id", (req, res) => {

    // Getting the course ID from the route parameter
    const courseId = Number(req.params.id);

    // Finding the requested course
    const course = courses.find(c => c.id === courseId);

    // Checking whether the course exists
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    // Removing the course from the courses array
    courses = courses.filter(c => c.id !== courseId);
    /*
    The JavaScript array method "filter()":
    ***************************************
    - Checks each element (course) in the array
    - c represents the current course to be checked
    - c.id !== courseId:
        > Keep the course if its ID is different from the ID we want to delete
    - Returns a new array containing only the courses that pass this condition

    In simple words:
    filter() creates a new array without the course we want to delete

    Then:
    We assign this new array back to the courses variable
    */

    // Sending a confirmation response
    res.json({ message: "Course deleted successfully" });
});

// Step#10: Starting the Express server
app.listen(PORT, () => {
    console.log(`Our app listening on http://localhost:${PORT}`);
});

/*
Important Note:
***************
The browser address bar sends GET requests when you open a URL.

However, for POST, PUT, and DELETE, we need to send requests
using the appropriate HTTP method and, when needed, a JSON request body.

We can practise these methods using tools such as:
- Postman (a desktop app or a VS extension)
- Thunder Client (a VS Code extension)

These extensions:
- Both of these tools, need to have an account. You can open an account using any email
- Allow us to test our REST API without building a frontend


NOTE:
> Remember that our data is stored in an in-memory array
> If we stop and restart the server, any changes made through POST, PUT, or DELETE will be lost
We will learn how to store data permanently using MySQL
*/