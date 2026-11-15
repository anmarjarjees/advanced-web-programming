# Advanced Web Programming:
Advanced Web Programming – Course materials, code examples, and references.

This repository contains my teaching materials, commented code examples, practical demonstrations, and learning resources for students enrolled in the Advanced Web Programming course.

This repository can also be used as an additional reference for setting up, building, and running our applications using GitHub Codespaces instead of working on local machines. Please refer to the final sections of this README for links to official online documentation and my other detailed GitHub repositories.

**Note:** We are starting with the second part of the course, as some sections from the first part, covering HTML, CSS, JavaScript review, and Vue.js, have already been covered in previous sessions.

# Technologies to be used:
- HTML and CSS
- JavaScript (ES6+)
- Node.js
- Express.js
- REST APIs
- Vue.js (version 3+)
- Vue Router
- MySQL
- Sequelize

# Main Course Topics:
- **Node.js Introduction**
  - Node fundamentals and modules
- **Express.js Basics**
  - Server, routing, parameters, middleware
- **REST API and CRUD**
  - HTTP methods, requests, responses and CRUD
- **MySQL**
  - Database and SQL fundamentals
- **Sequelize**
  - ORM, models and database operations
- **Vue Integration**
  - Vue Router and API integration
- **Vue Authentication**
  - Authentication, password hashing and authorization
- **Project Guidance**
  - Building, integrating and troubleshooting the project

# Repository Folders Structure:
- advanced-web-programming
  - README.md
  - 01-node-intro
  - 02-express-basics
  - 03-rest-api-crud
  - 04-mysql
  - 05-sequelize
  - 06-vue-integration
  - 07-vue-authentication
  - 08-project-guidance
 
 *All folders will be added gradually*

## Express Package
Notice that the Express package was initially installed inside the `02-express-basics` folder because it was the first lecture to introduce the Express framework. Later, we also installed Express in the root folder, `advanced-web-programming`, because we need to use it throughout the remaining lectures.

**To remove Express from a sub-folder:**
- Navigate to that folder
- Run this command:

```bash
npm uninstall express
```

*Notice that running `npm uninstall express` inside `02-express-basics` removes Express from that folder's `package.json` and its local dependencies. It does not remove the Express package installed in the root folder.*

# GitHub Repository and Codespaces Workspace Folder
When we create a new GitHub repository and start a Codespace for it, the project folder name will normally be the same as the repository name. However, if we rename the GitHub repository after creating our Codespaces workspace, the existing project folder will not be renamed automatically. It will keep its original name.

There is no problem with keeping the original folder name. However, if we want the project folder name to match the new repository name, we need to rename it manually. 

There are different ways to do this. Below are simple steps using the terminal and the VS Code Explorer.
 
1) Renaming the folder using the terminal:
When we open the terminal, it shows our current working directory. For example:
```bash
@username ➜ /workspaces/abc-crud-project (main) $ 
```

First, we need to move to the parent directory (workspaces) using the following command:
```bash
cd ..
```
cd stands for Change Directory. The .. refers to the parent directory.

Now, we should be in:
```bash
@username ➜ /workspaces $
```

Next, rename the project folder using the Linux mv command, which is used to move or rename files and folders.

In the following example, we are renaming the project folder from abc-crud-project to java-crud-operations:
```bash
mv abc-crud-project java-crud-operations
```

Notice:
- The mv command normally produces no output when successful
- Renaming the folder does not delete its contents or affect our Git repository. The hidden .git folder moves along with the project folder
- We do not need to stage, commit, or push our changes before renaming the folder


**Other useful Linux commands:**

- Check the current location by typing "pwd" (Printing Working Directory):
```bash
pwd
```

- List all the files including the hidden ones, ls for list, while -la:
```bash
ls -la
```
- ls => Lists files and directories
- -l => Displays the results in a detailed (long) format
- -a => Includes hidden files and directories

**For more details about essential Linux commands, you can review my repository: ["Linux CLI"](https://github.com/anmarjarjees/linux-cli).**

2) Refreshing the VS Code Explorer to display the renamed folder:
After successfully renaming the folder using the terminal, VS Code may still be using the old folder location as its current workspace. As a result, the Explorer may continue showing the old folder name, or it may not display our project files correctly.

To open the renamed folder:

- Click **File** in the top menu
- Select **Open Folder...**
- Select the newly renamed project folder and open it

VS Code will now use the renamed folder as our workspace, and the Explorer should display our project files and folders again.


**Alternatively, we can try refreshing the VS Code window:**

- Open the Command Palette:
  - Press Ctrl + Shift + P
  - Type Developer: Reload Window
  - Select the command

**Note:** If reloading the window does not refresh the Explorer correctly, we need to use File => Open Folder... as explained above.

----

# References, Resources, and Credits:
## Official Documentations:
- [Node.js Documentation](https://nodejs.org/en/learn)
- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Sequelize Documentation](https://sequelize.org/docs/v6/)
- [Vue.js Documentation](https://vuejs.org/guide/introduction.html)
- [Vue.js Tutorial](https://vuejs.org/tutorial/)
- [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html)
- [Vue Router Documentation](https://router.vuejs.org/)
- [MDN-Express and Node.js Tutorial](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- [MDN-Local Library Website Tutorial](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)
- [MDN-Getting Started with Vue](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)

## Development Tools:
- [npm-Nodemon](https://www.npmjs.com/package/nodemon)
- [Nodemon](https://nodemon.io/)
- [Postman](https://www.postman.com/)

## My Related Repositories:
- [JavaScript Introduction](https://github.com/anmarjarjees/javascript-code)
- [ECMAScript 6 (ES6) Essentials](https://github.com/anmarjarjees/ECMAScript6)
- [Node.js Introduction](https://github.com/anmarjarjees/node.js-start)
- [Express.js Basics](https://github.com/anmarjarjees/express-basics)
- [Node and Express Demo](https://github.com/anmarjarjees/des-node-express-demo)
- [Express.js Website Demo](https://github.com/anmarjarjees/express-node-website)
- [TypeScript Introduction](https://github.com/anmarjarjees/TypeScript-Intro)
- [JavaScript Frameworks Overview](https://github.com/anmarjarjees/js-frameworks)
- [Vue.js Fundamentals](https://github.com/anmarjarjees/vue.js-intro)
- [Vue.js Todo App](https://github.com/anmarjarjees/vue-todo-app)
- [Vue.js Basic Application](https://github.com/anmarjarjees/vue.js-basic-app)