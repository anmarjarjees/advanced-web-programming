/*
The Node.js Process Object:
***************************
- Node.js provides a global object called "process" 
- This object contains information about the currently running Node.js application 
- Allows us to interact with the current process

For example, we can use the process object to:
    - Get information about the Node.js version and operating system
    - Access command-line arguments
    - Read environment variables
    - Get the current working directory

NOTE:
The process object is available globally in Node.js.
We do not need to import or require it before using it.
*/

/*
Getting the Node.js Version:
****************************
The process.version property returns the version of Node.js currently running.
*/

// Displaying the Node.js version:
console.log("Node.js Version:", process.version); // Node.js Version: v24.22.2

/*
Getting the Operating System Platform:
**************************************
The process.platform property returns a string identifying
the operating system platform on which Node.js is running.

For example:
    - "win32" for Windows
    - "darwin" for macOS
    - "linux" for Linux
*/

// Displaying the operating system platform:
console.log("Operating System Platform:", process.platform); // Operating System Platform: linux

/*
Getting the CPU Architecture:
*****************************
The process.arch property returns a string
identifying the CPU architecture for which the Node.js binary was compiled.

For example:
    - "x64" for 64-bit x86 architecture
    - "arm64" for 64-bit ARM architecture
*/

// Displaying the CPU architecture:
console.log("CPU Architecture:", process.arch); // CPU Architecture: x64

/*
Getting the Current Working Directory:
**************************************
The process.cwd() method returns the current working directory
from which the Node.js process was started.

It returns the full path of that directory.
*/

// Displaying the current working directory:
console.log("Current Working Directory:", process.cwd());
// Current Working Directory: /workspaces/advanced-web-programming/01-node-intro

/*
Accessing Environment Variables:
********************************
The process.env property provides access to environment variables.

Environment variables are values stored outside our application
that can be accessed while the application is running.

They are commonly used to store configuration values, such as:
    - Application settings
    - Database connection details
    - API keys and other sensitive information

NOTE:
Environment variables are accessed as properties of process.env.
Their values are generally returned as strings.
*/

// Displaying the value of an environment variable:
console.log("Environment:", process.env.NODE_ENV); // Environment: undefined
/*
"undefined" => means that the NODE_ENV environment variable 
has not been defined in our current environment

If we want to test this command we can give a value before running our file in the terminal:
    > NODE_ENV=development node 02-process-object.js

    - NODE_ENV=development temporarily defines an environment variable for this command
    - node 02-process-object.js starts our Node.js program
*/