-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

CREATE DATABASE "Hollywood"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE actors(
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (100) NOT NULL,
	age DATE NOT NULL,
	number_oscars SMALLINT NOT NULL
)

SELECT * FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
	('Matt','Damon','08/10/1970', 5),
	('George','Clooney','06/05/1961', 2),
	('Viola','Davis','08/11/1965', 1),
	('Meryl','Streep','06/22/1949', 3),
	('Chris','Pratt','06/21/1979', 0),
	('Daniel','Day-Lewis','04/29/1957', 3),
	('Katharine','Hepburn','05/12/1907', 4)

SELECT * FROM actors;

UPDATE actors
SET first_name='Maty' WHERE first_name='Matt' AND last_name='Damon' AND age='1970-08-10'
RETURNING actor_id, first_name, last_name, age;

SELECT * FROM actors;

UPDATE actors
SET number_oscars=4 WHERE first_name='George' AND last_name='Clooney' AND age='1961-06-05'
RETURNING actor_id, first_name, last_name, age, number_oscars;

SELECT * FROM actors;

ALTER TABLE actors RENAME COLUMN age TO birthdate;

SELECT * FROM actors;

DELETE FROM actors
WHERE actor_id=5;

SELECT * FROM actors;

