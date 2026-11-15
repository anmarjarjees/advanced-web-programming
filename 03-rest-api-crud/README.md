# REST API (Representational State Transfer API):
An API (Application Programming Interface) allows two software applications to communicate with each other and exchange information.

For example, consider a weather application:
- A user opens a weather application and selects a city
- The application sends a request to a Weather API
- The Weather API processes the request and returns the weather information
- The application displays the current weather, temperature,
  humidity, and other weather details

The client sends an HTTP request to the server, and the server processes the request and sends back an HTTP response.

# What is a REST API?
- A REST API is a type of API that follows REST architectural principles
- REST APIs use HTTP requests to access and manipulate resources
- REST APIs commonly use JSON to exchange data between the client and server

# Understanding the term REST:
- Representational: The server sends information about a resource in a particular format, commonly JSON
- State: Refers to the current data or condition of a resource
- Transfer: Refers to sending that information between the client and server

Simply: REST describes an approach to communicating and exchanging information between applications

# API processing cycle:
- Weather Application (Requesting weather information for Toronto)
    ==> HTTP Request
        ==> Weather API (Processing the request and returning weather information in JSON format)
            ==> Weather Application (Displaying temperature, humidity, and weather conditions)

**To summarize:**
- API: A way for applications to communicate
- REST: An architectural style that defines principles for designing APIs
- JSON: A common format for exchanging data between applications

**In our application:**
- Vue.js => will act as the client
- Express => will provide the REST API
- MySQL => will store the data

# Install Postman:
1. Open the Extensions panel in Codespaces or VS Code
2. Search for "Postman" and click Install
3. You may need to refresh the browser to see its icon
4. Once Postman is installed, we'll test:
    - POST => Add a course
    - GET => Retrieve the new course
    - PUT => Update a course
    - DELETE => Delete a course

# Installing and Using Nodemon (Optional but Recommended!):
**Nodemon** is a development tool that automatically restarts our Node.js server whenever changes are detected in our application files.

Normally, whenever we make changes to our code and save the file, we need to stop and restart the server manually to see those changes. Instead, we can use [nodemon](https://www.npmjs.com/package/nodemon) to restart the server automatically whenever we save changes.

## 1. Installing Nodemon:
Before we start the installation process, please be advised that we may need to use Nodemon during other lectures, so it's recommended to be installed in the root folder "advanced-web-programming". 

We can install Nodemon in two different ways:

- Install it as a regular application dependency:

```bash
npm install nodemon
```

- Install it as a **development dependency** *(recommended)*, since we only need it during development and not in production:

```bash
npm install nodemon --save-dev
```

OR, using the shorter command:

```bash
npm i nodemon --save-dev
```

*Notice that using either command for installing will not affect the way or the commands to run it.*

**What is a development dependency?**

A development dependency is a package that we need while developing and testing our application, but is not required when running the application in production. Since Nodemon is only used during development, installing it as a development dependency is recommended.

After installing Nodemon, we will see a change in the `package.json` file under the `devDependencies` property. For example:

```json
"devDependencies": {
    "nodemon": "^3.x.x"
}
```

*Note: The version number may be different depending on the version installed.*

## 2. Updating the Scripts Section in package.json:
Installing Nodemon is not enough. We also need to add commands to the `scripts` property in our `package.json` file.

For example, our original scripts section might look like this:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

**We can update it as follows:**

```json
"scripts": {
    "start": "node 01-rest-api-intro.js",
    "dev": "nodemon 01-rest-api-intro.js"
}
```

To be more specific:
```json
 "main": "03-rest-api-crud/01-rest-api-intro.js"
```
*Please be advised that because package.json is already inside the "advanced-web-programming" root folder, we should not repeat that folder name.*

OR in our main project when we have one main express server file "app.js", it could be:
```json
"scripts": {
  "start": "nodemon app.js",
  "dev": "nodemon app.js"
}
```


**Understanding these commands:**

- `start` => Runs our application normally using Node.js
- `dev` => Runs our application using Nodemon, which automatically restarts the server whenever changes are detected

**NOTE:**

The file path above assumes that we are running these commands from the root directory of our project.

## 3. Running Our Application:
Now, instead of starting our application by typing the Node.js command directly, we can use the scripts we added to `package.json`.

We have two options:

**Option 1: Running the application normally**

```bash
npm start
```

This runs our application using Node.js.

**Option 2: Running the application during development**

```bash
npm run dev
```

This runs our application using Nodemon.

Whenever we make changes to our code and save the file, Nodemon automatically restarts the server. We no longer need to stop and restart it manually.

**Recommendation:**

During development, we will normally use:

```bash
npm run dev
```

This makes testing and developing our application easier and saves time.

## Nodemon Setting and Running (Quick and Easy Start):
Notice that we don't have to create two scripts, **"start"** and **"dev"**. We can simplify things by using only the **"start"** script :-)

- In **package.json** file:
```json
"scripts": {
  "start": "nodemon app.js"
}
```

Notice that app.js should be replaced with the name of our main Express server file., like in our current example:
```json
"scripts": {
    "start": "nodemon 01-rest-api-intro.js"
}
```

- Then, run this command:
```bash
npm start
```