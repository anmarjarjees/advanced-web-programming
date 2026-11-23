/*
Retrieving Records (Review):
****************************
- SELECT statement => to retrieve data from a table
- * (Asterisk) => to select all columns from the table
*/

-- Displaying all courses:
SELECT * FROM courses;

/*
Selecting Specific Columns:
***************************
- We can specify column names instead of using *
- Separate multiple column names with a comma
*/

-- Displaying course names only:
SELECT name FROM courses;

-- Displaying instructor names:
SELECT name FROM instructors;

/*
Filtering Records:
******************
- WHERE clause => to retrieve records that match a specific condition
- We can use comparison operators such as:
    - =  Equal to
    - >  Greater than
    - <  Less than
    - >= Greater than or equal to
    - <= Less than or equal to
    - <> Not equal to
*/

-- Displaying a course with a specific ID:
SELECT * FROM courses
WHERE course_id = 1;

-- Displaying classes scheduled after a specific date:
SELECT * FROM classes
WHERE class_date > '2026-11-17';

/*
Sorting Records:
****************
- ORDER BY clause => to sort the retrieved records
- ASC => ascending order (by default)
- DESC => descending order
*/

-- Displaying courses in alphabetical order:
SELECT * FROM courses
ORDER BY name ASC;

-- Displaying courses in reverse alphabetical order:
SELECT * FROM courses
ORDER BY name DESC;

/*
Displaying the Class Schedule:
******************************
We can retrieve specific columns from our classes table
to display the scheduled dates and times.
*/

-- Displaying scheduled classes by date:
SELECT course_id, instructor_id, class_date, start_time, end_time
FROM classes
ORDER BY class_date ASC;