// Express Middleware:
/*
Middleware => A function that runs during the request-response cycle.
*/

// Step#01: Importing the "Express" package
import express from "express";

// Step#02: Creating an Express application
const app = express();

// Step#03: Defining the port number
const PORT = 3000;


/*
Understanding Express Middleware:
*********************************
Express Middleware functions have access to three main arguments:
- req => contains information about the incoming request
- res => used to send a response back to the client
- next => a function used to pass control to the next middleware function or route handler

Middleware functions can:
- Execute some code
- Read or modify the request and response objects
- End the request-response cycle by sending a response
- Pass control to the next middleware function or route handler using next()

Notice:
If a middleware function does not send a response or call next(),
the request will be left hanging.

The term "Middleware":
These types of functions are called "Express Middleware" or "Middleware Functions",
because they are a kind of software that works in the middle between two stages of a process in Express:
- First => The client sends a request
- Middleware => Executes some code while the request is being processed
- Then => The route handler processes the request and sends a response

So, middleware acts as a middle layer between the incoming request and the final response.

Link: https://expressjs.com/en/5x/guide/using-middleware/?utm_source=chatgpt.com
*/

// Step#04: Creating a custom middleware function

// A simple middleware function to log information about incoming requests
/*
We will create our custom middleware function 
to display information about each incoming request to be printed in the terminal

Example:
When someone visits /courses => it displays:
 Request Method: GET
 Request URL: /courses
*/

const requestLogger = (req, res, next) => {
    /*
        - req => contains information about the incoming request
        - res => allows us to send a response
        - next => allows us to continue to the next middleware or route handler

      Important note to review: 
      - "next" is a function provided by Express
      - the arrow function receives the next function as a parameter (not executing it yet)
      - Then, inside the middleware, we call the next function by writing next()
      
      So:
      - next => a reference to the function itself (we are receiving it, not executing it yet)
      - next() => calls the function to pass control forward
    */

    // Getting the HTTP request method and URL
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log('-----------------------------');

    // Passing control to the next middleware function or route handler
    next();
};
/*
The request flow:
Client sends a request
    ==> Middleware displays the request information
    ==> Calls next()
    ==> Route Handler sends the response using res.send()
*/

/*
NOTE:
- next() means continue to the next middleware or route handler
- next is not itself a middleware. It is a function that Express provides to our middleware so it can pass control forward
*/

/*
Using app.use() to register our custom middleware function:

- app.use() is used to register middleware functions in our Express application.
 > In this example, because we did not specify a path,
 > requestLogger will run for every incoming request.

 Notice:
The order of middleware registration is important.
Middleware runs in the order it is registered.
*/

// Registering our custom middleware
app.use(requestLogger);


// Step#05: Creating different routes using the .get() method

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


/*
Middleware and Express:
***********************
Please be advised that Express has both built-in middleware and custom middleware:

1. Custom middleware:
A function that we create ourselves, as in our example above:

const requestLogger = (req, res, next) => {
    console.log(req.method);
    next();
};

We call it "Custom Middleware" because we created it

2. Built-in middleware
Express also provides middleware functions that are already created for us.

Examples:
express.json()
express.urlencoded({ extended: true })
express.static('public')


Finally: app.use()
This Express method ".use()" is used to register middleware, as with our example:
    > app.use(requestLogger);

or register/use a built-in middleware:
    > app.use(express.json());


So, "Middleware" is a function designed to run during the request-response cycle. 
app.use() registers that function so Express can execute it.


To summarize:
*************
- requestLogger => Our custom middleware function
- express.json() => Express built-in middleware function
- app.use() => Registers middleware with our Express application

For more examples, check my Express repo files:
Link: https://github.com/anmarjarjees/express-basics/blob/main/index5.js
Link: https://github.com/anmarjarjees/express-basics/blob/main/index6.js


*/

// Step#06: Starting the Express server
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});

/*
Run the file:
    > node 06-middleware

Try different URLs:
- /
- /about
- /courses

Notice the terminal:
Every time we visit one of these URLs, our middleware runs first
and logs the HTTP request method and URL before the route handler sends its response.

For example:
Request Method: GET
Request URL: /courses
*/

// References:
// https://expressjs.com/en/5x/guide/using-middleware.html
// https://expressjs.com/en/5x/guide/writing-middleware.html
