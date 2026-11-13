// Express Static Files:
/*
Static Files => Files that are served directly to the client 
without being generated dynamically by our server.

Examples:
- HTML files
- CSS files
- JavaScript files
- Images
- Multimedia

Link: https://expressjs.com/en/5x/starter/static-files.html
Link: https://expressjs.com/en/5x/api/express/#express.static

For more examples and details, visit my two related repo files:
Link: https://github.com/anmarjarjees/express-basics/blob/main/index5.js
Link: https://github.com/anmarjarjees/express-node-website/blob/main/app.js
*/

// Step#01: Importing the "Express" package
import express from "express";

// Step#02: Creating an Express application
const app = express();

// Step#03: Defining the port number
const PORT = 3000;

/*
Understanding Static Files:
***************************
Express provides a built-in middleware function called "express.static()"
to serve static files such as HTML, CSS, JavaScript, and images.

For example:
    > app.use(express.static('public'));

This tells Express to serve the files inside our "public" folder.

NOTE: We don't include the folder name "public" in the URL.

For example:
- File location: public/about.html
- URL: http://localhost:3000/about.html
*/

// Step#04: Serving our static files
/*
We use the built-in middleware function "express.static()"
and register it using the Express method "app.use()".

Syntax:
    > express.static(root, [options]);

- root => The folder where our static files are stored.
- options => Optional settings for serving these files.

In our example, we pass the folder name "public".
*/
app.use(express.static('public'));

/*
Now we can access our static files using the browser:

1. Home page:
   http://localhost:3000/

2. About page:
   http://localhost:3000/about.html

3. CSS file:
   http://localhost:3000/css/styles.css

4. JavaScript file:
   http://localhost:3000/js/script.js

5. Image:
   http://localhost:3000/images/sample.jpg

Notice:
- index.html is served automatically when we visit the root URL "/".
- We don't need to define a separate app.get() route for each static file.
*/


/*
Creating a virtual path prefix (Optional):
*******************************************
We can also specify a URL prefix when registering our static folder.

For example:
    > app.use('/static', express.static('public'));

Now, instead of accessing:
http://localhost:3000/about.html

We access:
http://localhost:3000/static/about.html

Notice:
- "/static" is only a URL prefix (not an actual folder).
- It does not represent an actual folder inside our project.
- Our actual static files are still stored in the "public" folder.

For this example, we are using the basic approach above.
*/

// Step#05: Starting the Express server
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});

/*
Run the file:
    > node 06-serving-static-files

Try accessing the different URLs listed above.
*/