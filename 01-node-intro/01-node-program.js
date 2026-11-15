/*
The entry point for a Node.js application is typically "index.js".

If the main file is named "index.js", we can run it by typing:
    > node .

- The "." points to the root directory of the current application
- Node.js looks for the application's entry point using the "main" property in package.json or, by default, an index.js file

If the file has a different name, such as "app.js", we can run it directly:
    > node app.js

NOTE:
When running a JavaScript file from the command line,
it is best to include the .js extension to identify the file explicitly
*/

/*
Displaying Output in Node.js:

When we type console.log() in a JavaScript program that runs in the browser,
it displays information in the Browser Console.

In Node.js, console.log() displays information in the terminal.

Node.js provides a console object with various useful methods
for displaying messages and inspecting objects.
*/

// Display a simple message in the terminal:
console.log("Hello World!"); // Output: Hello World!


/*
Displaying Objects in Node.js:

We can use console.log() to display an object and its properties in the terminal.
*/

// Creating a simple object:
const person = {
    name: "Alex Chow",
    age: 25,
    address: {
        city: "Toronto",
        country: "Canada"
    }
};

// Displaying the object:
console.log(person);
/*
console.log() is useful for displaying objects, but when working with deeply nested objects, 
we may want to inspect their structure more clearly.
*/

/*
Using console.dir():
    > console.dir() displays the properties of an object.

We can pass an options object as the second argument to customize how the object is displayed.

For example:
    - depth: Specifies how many levels of nested objects to display
    - depth: null means display all levels, including deeply nested objects
*/

// Displaying the object with all nested levels:
console.dir(person, { depth: null });

/*
Using "JSON.stringify()":
*************************
JSON.stringify() converts a JavaScript value, such as an object, into a JSON string.

This JSON method accepts three arguments:
    - value: The JavaScript value we want to convert
    - replacer: An optional function or array used to select or modify the properties
    - space: An optional value that controls indentation in the resulting JSON string

For our example:
    - person: The object we want to convert
    - null: We are not using a replacer
    - 3: Indent the output using 3 spaces

This makes the resulting JSON string easier to read.
*/

// Converting the object into a formatted JSON string:
console.log(JSON.stringify(person, null, 3));