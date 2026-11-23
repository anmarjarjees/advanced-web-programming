/*
Inserting a New Record:
***********************
- INSERT INTO statement => to add a new record to a table
- VALUES keyword => to specify the values we want to insert
*/

-- Adding a new course:
INSERT INTO courses (name)
VALUES ('Python');

/*
Updating Existing Records:
**************************
- UPDATE statement => to modify existing records in a table
- SET keyword => to specify the column(s) and new value(s)
- WHERE clause => to specify which record(s) we want to update

NOTE:
We need to use the WHERE clause when we want to update specific records.
Otherwise, all records in the table will be updated.

Always => Double check the WHERE condition before executing UPDATE or DELETE statements
*/

-- Updating an existing course:
UPDATE courses
SET name = 'JavaScript Fundamentals'
WHERE course_id = 1;

-- Verifying the updated record:
SELECT * FROM courses;

/*
Deleting Existing Records:
**************************
- DELETE statement => to remove existing records from a table
- WHERE clause => to specify which record(s) we want to delete

NOTE:
We need to use the WHERE clause when we want to delete specific records.
Otherwise, all records in the table will be deleted.
*/

-- Deleting an existing course:
DELETE FROM courses
WHERE course_id = 6;

-- Verifying the deleted record:
SELECT * FROM courses;