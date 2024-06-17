-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

SELECT * FROM items ORDER BY price ASC;

SELECT * FROM items WHERE (price >= 80) ORDER BY price DESC;

SELECT * FROM customers;

SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;

SELECT last_name FROM customers ORDER BY last_name DESC;
