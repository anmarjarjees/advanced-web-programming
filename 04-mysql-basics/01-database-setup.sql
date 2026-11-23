/*
SQL (Structured Query Language):
*******************************
SQL is a standard language used to communicate with relational databases to:
- Create database tables
- Insert new records
- Retrieve existing records
- Update existing records
- Delete records

These operations are commonly known as CRUD:
- CREATE (INSERT) => Adds new records
- READ (SELECT) => Retrieves existing records
- UPDATE (UPDATE) => Modifies existing records
- DELETE (DELETE) => Removes existing records

Examples of relational database management systems (RDBMS):
- MySQL
- Microsoft SQL Server
- PostgreSQL
- Oracle Database
- MariaDB

In this lesson, we will use MySQL to practise the essential SQL commands.
*/

/*
Database Structure:
*******************
A relational database organizes data into tables:
- Database => A collection of related tables
- Table => Stores data about a specific subject
- Record (Row) => Represents one individual entry in a table
- Field (Column) => Represents a specific piece of information about each entry

For example, our courses table will contain information about courses:
- course_id => 1, 2, 3, 4, etc...
- name => JavaScript, Node.js, etc...

- Each row (record) represents one course
- Each column (field) represents an attribute of a course
- The course_id column will uniquely identify each course

These could be the courses for this website :-)
https://github.com/anmarjarjees/website-mockup
*/

/*
Creating a Database:
********************
- "CREATE DATABASE" statement => to create a new database
- We can use "IF NOT EXISTS" => to avoid an error if the database already exists
*/

-- Creating our school database:
CREATE DATABASE IF NOT EXISTS AchieveEdAcademy;

-- Displaying the available databases:
SHOW DATABASES;

-- Selecting our database to work with:
USE AchieveEdAcademy;

/*
Creating a Table:
*****************
- "CREATE TABLE" statement => to create a new table

Essential and Basic Column Definitions:
***************************************
- INT: Stores integer (whole number) values
- VARCHAR(n): Stores variable-length text, up to n characters
- PRIMARY KEY: Uniquely identifies each record in a table
- AUTO_INCREMENT: Automatically generates a new numeric value for a column
- NOT NULL: Ensures that a column cannot contain a NULL value

We will have 3 tables:
- courses: Stores course names such as JavaScript, Node.js, and C#
- instructors: Stores instructor information
- classes: Stores scheduled classes, including their courses, instructors, dates, and times
*/

-- Creating our "courses" table:
CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

-- Displaying the available tables:
SHOW TABLES;

-- Viewing the structure of our courses table:
DESCRIBE courses;

/*
Field	        Type	        Null	    Key	            Default	    Extra
course_id	    int	            No	        PRI	            null	    auto_increment
name        	varchar(100)	No		    null	

For our two columns:
********************
- course_id:
  - int: Stores integer values
  - Null = NO => Cannot be NULL
  - Key = PRI => Primary key
  - Extra = auto_increment => MySQL automatically generates its value

- name:
  - varchar(100) => Stores text up to 100 characters
  - Null = NO => Cannot be NULL
*/

/*
Inserting Record(s):
********************
- INSERT INTO statement => to add new records to a table
- VALUES keyword => to specify the values we want to insert

Since our course_id column uses the AUTO_INCREMENT attribute,
we don't need to provide an id value.
MySQL will automatically generate it for each new record.
*/

-- Inserting our first course:
INSERT INTO courses (name)
VALUES ('JavaScript');

-- Verifying the inserted record by retrieving all Records:
SELECT * FROM courses;
/*
- SELECT statement => to retrieve data from a table
- * (Asterisk) => to select all columns from the table
*/


/*
Inserting Multiple Records:
***************************
- We can insert multiple records into a table using a single "INSERT INTO" statement
- Separate each set of values with a comma
*/

-- Adding three more courses to our courses table:
INSERT INTO courses (name)
VALUES
    ('Node.js'),
    ('Express'),
    ('Vue.js'),
    ('C#'),
    ('ASP.NET Core');

-- Selecting all courses:
SELECT * FROM courses;

/*
Creating the Instructors Table:
*******************************
Our school also needs to store information about the instructors.

We will create an "instructors" table with two columns:
- instructor_id (Primary Key): Uniquely identifies each instructor
- name: Stores the instructor's name
*/

-- Creating our instructors table:
CREATE TABLE instructors (
    instructor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

-- Verifying that the table was created:
SHOW TABLES;

-- Viewing the table structure:
DESCRIBE instructors;

/*
Inserting Instructor Records:
*****************************
- Adding some sample instructors to our school
- We can insert multiple instructors using a single "INSERT INTO" statement
*/

-- Adding instructors to our instructors table:
INSERT INTO instructors (name)
VALUES
    ('Alex Chow'),
    ('Martin Smith'),
    ('Sam Simpson');

-- Verifying the inserted records:
SELECT * FROM instructors;

/*
Creating the Classes Table:
***************************
Our school needs to schedule classes for different courses
and assign instructors to teach them.

The classes table will contain:
- class_id: The unique ID of each class
- course_id: References the course in the courses table
- instructor_id: References the instructor in the instructors table
- class_date: The scheduled date
- start_time: The starting time
- end_time: The ending time

Primary Key (PK) vs Foreign Key (FK):
*************************************
- Primary Key (PK):
    > Uniquely identifies each record in a table

- Foreign Key (FK):
    > Creates a relationship between two tables
    > References a key (usually a Primary Key) in another table

In our example:
- course_id references course_id in the courses table
- instructor_id references instructor_id in the instructors table
*/

/*
The "classes" table:
- class_id (PK: PRIMARY KEY) => Uniquely identifies each class
- course_id (FK: FOREIGN KEY) => References course_id in the courses table
- instructor_id (FK: FOREIGN KEY) => References instructor_id in the instructors table
- class_date => Stores the scheduled date
- start_time => Stores the class starting time
- end_time => Stores the class ending time
*/

-- Creating our classes table:
CREATE TABLE classes (
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT NOT NULL,
    instructor_id INT NOT NULL,
    class_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (instructor_id) REFERENCES instructors(instructor_id)
);

-- Verifying that the table was created:
SHOW TABLES;

-- Viewing the table structure:
DESCRIBE classes;

/*
Inserting Class Records:
************************
Our "classes" table contains two foreign keys:
- course_id references the courses table
- instructor_id references the instructors table

NOTE:
We must use existing IDs from the courses and instructors tables.
*/

-- Adding scheduled classes:
INSERT INTO classes (course_id, instructor_id, class_date, start_time, end_time)
VALUES
    (1, 1, '2026-11-16', '9:00', '11:30'),
    (2, 2, '2026-11-17', '12:00', '14:30'),
    (3, 3, '2026-11-18', '9:00', '11:30'),
    (4, 1, '2026-11-19', '12:00', '14:30');

/*
Notice that:
- course_id must match an existing courses.course_id in the courses table
- instructor_id must match an existing instructors.instructor_id in the instructors table
- In MySQL, the standard date format for a DATE value is: YYYY-MM-DD

The foreign keys help prevent references to courses or instructors that don't exist
*/

-- Verifying the inserted records:
SELECT * FROM classes;

-- Display all the records in each table in our database:
/*
- Each table has its own primary key:
    - courses.course_id
    - instructors.instructor_id
    - classes.class_id

- classes.course_id references courses.course_id
- classes.instructor_id references instructors.instructor_id

- Foreign keys establish relationships between tables
*/
-- Displaying all courses:
SELECT * FROM courses;

-- Displaying all instructors:
SELECT * FROM instructors;

-- Displaying all scheduled classes:
SELECT * FROM classes;