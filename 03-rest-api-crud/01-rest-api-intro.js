/*
Express application & REST API:
*******************************
In our application:
- Vue.js => sends an HTTP request to our Express server
- Express => receives and processes the request
- Express => sends an HTTP response back to Vue.js

An API endpoint is a specific API address 
that the client can send a request to using an HTTP method.

For example:
    GET http://localhost:3000/api/courses

    - Base URL: The main address of our server
        > http://localhost:3000/

    - Endpoint path: The specific API address that handles a request
        > /api/courses
    
    - HTTP method: Indicates what operation the client wants to perform
        > get, post, put, or delete

This endpoint will allow the client to request a list of courses

We will use different HTTP methods to perform different operations:
- GET => Retrieve data
- POST => Add new data
- PUT => Update existing data
- DELETE => Delete data
*/

/*
Creating our first REST API endpoint:
*************************************
We will use Express to create an API endpoint that responds to an HTTP GET request.

For example:
    GET http://localhost:3000/api/courses

When a client sends a GET request to this URL:
- Express receives the request
- The route handler processes the request
- The server sends a response back to the client

We can use res.json() to send a JSON response.
*/

// Using the same Express template:

// Step#01: Importing the Express package "express"
import express from "express";

// Step#02: Creating an Express application "app"
const app = express();

// Step#03: Defining the port number 3000
const PORT = 3000;

/*
Sending a response from an API:
*******************************
Express provides different methods for sending responses.

Examples:
- res.send() => A general-purpose method that can send different types of responses,
  such as text, HTML, and objects.
- res.json() => Sends a JSON response and sets the appropriate Content-Type header*.

Content-Type header => Tells the client what type of data the server is sending.

When building REST APIs, we commonly use res.json() to send data back to the client in JSON format
*/

// Step#04: Defining our first REST API endpoint
app.get("/api/courses", (req, res) => {
    res.json([
        { id: 1, name: "JavaScript" },
        { id: 2, name: "Node.js" },
        { id: 3, name: "ASP.NET Core" }
    ]);
});
/*
In Step#04:
- app.get() => The route will respond to HTTP GET requests
- "/api/courses" => The endpoint path
- req => The incoming request
- res => The response that this method will send back
- res.json() => Sends the data in JSON format
*/

// Step#05: Starting the Express server
app.listen(PORT, () => {
    // Using ES6 Template Literal to include the PORT value in our logged message:
    // Link (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
    console.log(`Our app listening on port ${PORT}`);
    // OR simply click the URL:
    console.log(`Our app listening on http://localhost:${PORT}`);
});

/*
To run our application:
    > node 01-rest-api-intro

Then open:
    - In our local machines: http://localhost:3000/api/courses
    - In Codespaces (example): https://congenial-winner-7x6rvq7g9wh75x-3000.app.github.dev/api/courses

Result:
[{"id":1,"name":"JavaScript"},{"id":2,"name":"Node.js"},{"id":3,"name":"ASP.NET Core"}]
*/