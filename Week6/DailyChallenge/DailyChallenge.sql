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

SELECT * FROM actors;

SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name,last_name,birthdate,number_oscars)
VALUES ('Gal','Gadot',NULL,NULL)

-- Inserting another actor with blank fields will not work because the constraints say that all fields must be "NOT NULL".
--ERROR:  Failing row contains (8, Gal, Gadot, null, null).null value in column "birthdate" of relation "actors" violates not-null constraint 

--ERROR:  null value in column "birthdate" of relation "actors" violates not-null constraint
--SQL state: 23502
--Detail: Failing row contains (8, Gal, Gadot, null, null).