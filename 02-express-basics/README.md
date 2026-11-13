# Express.hs Basics:
A quick introduction to Express.js, a web framework for Node.js. In this section, we will learn about how to create a web server using Express, handle HTTP request, define routes, and send responses to the server.

# Lesson Topics:
- Installing Express and setting up a project
- Creating and running and Express server
- Working with routes and HTTP requests
- Sending responses using `res.send()` and `res.json()`
- Working with routes parameters
- Introduction to Express middleware

# Node.js and GitHub Codespaces
Remember, as we discussed in the first lesson, GitHub Codespaces already provides a development environment with Node.js and npm available.

To review, we can verify their installed versions by running these commands in the terminal:

```bash
node -v
npm -v
```

# Project Setup
Navigate to our project folder `02-express-basic` in GitHub Codespaces.

## Initialize and Install Required Packages
Initialize the project by running the following command in the terminal:

```bash
npm init -y
```
This command creates a `package.json` file containing the basic project information and configuration.


Then, install Express:
```bash
npm install express
```
This command installs Express and adds it to the project's dependencies in `package.json`.


After running these two commands, you should see:
- `package.json`
- `package-lock.json`
- `node_modules/` => The folder for the installed packages

## package.json File Modification
Add the following property to the `package.json` file:

```json
"type": "module"
```

Notice that in GitHub Codespaces, the file may already have the `"type"` property with the default value of `"commonjs"`, unlike when running this command on our local machines, where we may need to add it.

```json
"type": "commonjs"
```
Change the value to `"module"`. This tells Node.js that we'll use ES module syntax (`import` and `export`) in our JavaScript files.

## Running Our Lesson Files
As explained in our previous lesson, we can run a JavaScript file using Node.js:

```bash
node 01-express-server.js
```

Alternatively, if we have a main file defined in our `package.json` file, along with a `start` script as we will do in our project, we can simply type:

```bash
npm start
```

# About Express.js
Express is a web framework for Node.js that makes it easier to create web servers and handle HTTP requests. With Node.js, we can create a web server using the built-in `http` module. Express simplifies the way we work with routes and requests.

- **HTTP request**: A message sent by a client (such as a browser) to a server to request information or perform an action.
- **HTTP response**: A message sent by the server back to the client containing the requested information or the result of the request.
- **Routing**: Defines how our application responds to different requests sent to different URLs.

**Example:**
- User visits the home page (index page by default) => `/` => Display the home page
- User visits the about page => `/about` => Display the about information page
- User visits the services page => `/services` => Display the company's services (for example)