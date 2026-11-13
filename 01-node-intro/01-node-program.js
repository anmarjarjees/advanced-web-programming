/*
The entry point for a Node.js application is typically "index.js".

If the main file is named "index.js", we can run the application by typing:
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