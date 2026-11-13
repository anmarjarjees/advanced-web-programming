/*
    Express.js
    **********
     - Express is a web application framework for Node.js
     - It provides an easy way to create web servers and handle HTTP requests and responses

    Link: https://expressjs.com/
*/

// Below is the basic Express template code:
// https://expressjs.com/en/5x/starter/hello-world/

// Instead of using "require", we will use the modern ES module syntax "import"
// const express = require('express');

// Step#01: Importing the "Express" package
import express from "express";

// Step#02: Creating an Express application (Using "app" by convention)
const app = express();
/*
- express() is a function that creates an Express application
- We store the returned application object in a variable named "app" by convention
- This object "app" will be used to configure our application, define routes, add middleware, and start our server
*/

// Step#03: Defining the port number
// const port = 3000; // Express Syntax
// OR:
const PORT = 3000; // Using UPPER-CASE for JS const by convention
/*
A "port" is simply a communication endpoint used by applications to receive network connections.
We will use port 3000 for our examples. Later, we can use environment variables to configure the port dynamically.
*/

// Step#04: A simple READ operation using the .get() method:
/*
CRUD Operations Methods:
- Create => .post()
- Read => .get()
- Update => .put()
- Delete => .delete()

Express uses these methods such as app.get() to define routes:

The general syntax/template:
app.get(path, callback);
- path => the URL path to handle (the endpoint)
- callback => the arrow/anonymous function => this function is run when a matching request arrives
- The function arguments/parameters:
    > req: contains information about the incoming request
    > res: used to send a response back to the client (a browser for example)
*/
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Step#05: Starting the Express server
app.listen(PORT, () => {
    // Using ES6 Template Literal to include the PORT value in our logged message:
    // Link (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
    console.log(`Example app listening on port ${PORT}`);
    // OR in our local machine to simply click the URL:
    console.log(`Example app listening on http://localhost:${PORT}`);
});
/*
The listen() method starts the server
and makes it listen for incoming HTTP requests on the specified port.

It accepts a callback function that runs when the server starts listening
*/

/*
To run the file:
    > node 01-express-server.js

1) The browser sends an HTTP GET request to our Express server
2) Express matches the request to app.get('/')
3) The callback function (an anonymous arrow function) is executed
4) res.send('Hello World!') sends the response back to the browser


NOTE:
Unlike running our app on our local machines, where localhost is used,
GitHub Codespaces uses the forwarded port URL instead of localhost.

For example:
https://congenial-winner-7x6rvq7g9wh75x-3000.app.github.dev/

Local development:       
    > http://localhost:3000    

GitHub Codespaces:
    > https://...-3000.app.github.dev

The URL is different, but our Express routes and code remain exactly the same.
GitHub Codespaces forwards requests from that public development URL to our application running on port 3000.
*/