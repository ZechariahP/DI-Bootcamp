--Daily Challenge: Tables Relationships
--Part I
--1.
CREATE TABLE customer (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (50),
	last_name VARCHAR (50) NOT NULL 
)

CREATE TABLE customer_profile (
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INTEGER,
	FOREIGN KEY (customer_id) REFERENCES customer(id)
)

--2.
INSERT INTO customer (first_name,last_name)
VALUES 
	('John','Doe'),
	('Jerome','Lalu'),
	('Lea','Rive');

--3.
INSERT INTO customer_profile (customer_id,isLoggedIn)
VALUES
	(1,'true'),
	(2,'false');

--4.1
SELECT first_name FROM customer
INNER JOIN customer_profile ON customer.id=customer_profile.customer_id
WHERE isLoggedIn='true'

--4.2
SELECT first_name, isLoggedIn FROM customer
LEFT JOIN customer_profile ON customer.id=customer_profile.customer_id

--4.3
SELECT COUNT(*) FROM customer
INNER JOIN customer_profile ON customer.id=customer_profile.customer_id
WHERE isLoggedIn='false'

--Part II
--1.
CREATE TABLE Book (
	book_id SERIAL PRIMARY KEY,
	title VARCHAR (50) NOT NULL,
	author VARCHAR (50) NOT NULL
)

--2.
INSERT INTO Book (title, author)
VALUES 
	('Alice In Wonderland','Lewis Carroll'),
	('Harry Potter','J.K Rowling'),
	('To Kill a Mockingbird','Harper Lee')

--3.
CREATE TABLE Student (
	student_id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL UNIQUE,
	age INTEGER
	CONSTRAINT check_age CHECK (age > 0 AND age <= 15)
)

--4.
INSERT INTO Student (name,age)
VALUES
	('John',12),
	('Lera',11),
	('Patrick',10),
	('Bob',14);

--5.
CREATE TABLE Library (
    book_fk_id INTEGER,
    student_id INTEGER,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

--6.1
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
);

--6.2
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
);

--6.3
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
);

--6.4
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);

--7.1
SELECT * FROM Library

--7.2
SELECT s.name AS student_name, b.title AS book_title
FROM Library l
INNER JOIN Student s ON l.student_id = s.student_id
INNER JOIN Book b ON l.book_fk_id = b.book_id;

--7.3
SELECT AVG(age) AS average_age
FROM Student s
INNER JOIN Library l ON s.student_id = l.student_id
INNER JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

--7.4
DELETE FROM Student
WHERE student_id = 1;

SELECT * FROM Library
--When deleting the student_id=1 (John), the whole row that includes the book_fk_id=1 ('Alice In Wonderland'), John's student_id and the borrowed_date when he borrowed the book.