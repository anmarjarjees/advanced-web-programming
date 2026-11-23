# MySQL
This folder contains a quick review of essential SQL commands and concepts, including:
- Database fundamentals
- SQL fundamentals
- Creating databases and tables
- Introduction to Primary Keys (PK) and Foreign Keys (FK)
- Essential SQL CRUD operations (INSERT, SELECT, UPDATE, DELETE)

**For more examples and details, you can review my github repositories:**

- [MySQL Essentials](https://github.com/anmarjarjees/mysql-essentials)
- [MySQL Code](https://github.com/anmarjarjees/mysql-code)
- [MySQL and Node.js Quick Start](https://github.com/anmarjarjees/node.js-mysql)

---
To quickly review and practise SQL commands, we can use either of the following free online platforms:
- [DB Fiddle - MySQL Playground](https://www.db-fiddle.com/)
- [CompileBytes - MySQL Playground](https://compilebytes.com/tools/mysql)

We will primarily use **DB Fiddle** because it separates table creation and initial data from SQL queries, making the lesson easier to follow:
- **Schema SQL**: Used to create our database tables and insert the initial sample records
- **Query SQL**: Used to practise SQL commands such as SELECT, INSERT, UPDATE and DELETE

We can prepare our three tables in Schema SQL, then concentrate on practising SQL queries without repeatedly copying the table setup.

**My workflow will be:**
- Codespaces: Maintain the complete `.sql` lesson files with all the detailed comments and explanations
- DB Fiddle => Schema SQL: Create our tables and insert the initial records
- DB Fiddle => Query SQL: Practise SQL commands such as INSERT, SELECT, UPDATE and DELETE
- GitHub: Keep my SQL files permanently in the repository

# SQL Files:
- **01-database-setup.sql**
    - Create the AchieveEdAcademy database
    - Create our three tables: courses, instructors, and classes
    - Introduce basic data types, primary keys, foreign keys, and AUTO_INCREMENT
    - Insert initial sample records
- **02-sql-crud.sql**
    - INSERT
    - UPDATE
    - DELETE
    - Simple examples using our AchieveEd Academy tables
    - Emphasize the importance of WHERE when updating or deleting records
- **03-sql-select.sql**
    - SELECT *
    - Selecting specific columns
    - Simple WHERE conditions
    - ORDER BY

# Our Database:
- AchieveEdAcademy Database:
    - courses
        - course_id (PK)
        - name
    - instructors
        - instructor_id (PK)
        - name
    - classes
        - class_id (PK)
        - course_id (FK => courses.course_id)
        - instructor_id (FK => instructors.instructor_id)
        - class_date
        - start_time
        - end_time
