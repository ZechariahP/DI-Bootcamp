--ExerciseXP
--Exercise 1: DVD Rental

SELECT * FROM language

SELECT film.title, film.description, language FROM language INNER JOIN film ON film.language_id=language.language_id

SELECT film.title, description, name FROM language LEFT JOIN film ON film.language_id=language.language_id
	
CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL
)

INSERT INTO new_film (name)
VALUES 
	('The Super Mario Bros Movie'),
	('Dungeons and Dragons: Honor of Thieves'),
	('Planet of the Apes');

SELECT * FROM new_film

CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INTEGER NOT NULL,
	language_id INTEGER NOT NULL,
	title VARCHAR (100) NOT NULL,
	score INTEGER NOT NULL,
	review_text TEXT,
	last_update TIMESTAMP DEFAULT current_timestamp,
	CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id), 
	CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
	CONSTRAINT score_value CHECK (score > 0 AND score <= 10)
)

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
	(1,1,'Great movie',9,'It is a very nostalgic movie'),
	(2,1,'Fun for the family',8,'Great story with memorable characters'),
	(3,1,'Not that great',3,'I fell asleep 30 minutes into the movie') RETURNING *;

SELECT * FROM new_film

DELETE FROM new_film WHERE (name='Planet of the Apes') RETURNING *

SELECT * FROM customer_review

--Planet of the Apes is now no longer in the customer_review table.

--Exercise 2: DVD Rental

--1.
SELECT * FROM film INNER JOIN language ON film.language_id=language.language_id
	
UPDATE film SET language_id=2 WHERE (film_id=133)

SELECT * FROM film INNER JOIN language ON film.language_id=language.language_id WHERE (title='Chamber Italian')

SELECT * FROM customer

SELECT * FROM address

--2.
INSERT INTO customer(first_name,last_name,store_id,address_id)
VALUES ('Zachary','Premack',1,1)

SELECT * FROM customer WHERE (first_name='Zachary')
--When inserting a new customer, store_id and address_id must be filled in.

--3.
DROP table customer_review
--It was an easy step and did not require checking.

--4.
SELECT * FROM rental WHERE (return_date IS NULL)
--183 are still outstanding.

--5.
SELECT film.film_id, film.title, film.replacement_cost, rental.inventory_id, rental.return_date FROM inventory
INNER JOIN film ON inventory.film_id=film.film_id 
INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
WHERE (return_date IS NULL) 
ORDER BY replacement_cost DESC 
LIMIT 30
--This selects the 30 most expensive films that haven't been returned.

--6.1
SELECT title, first_name, last_name, description FROM film
INNER JOIN film_actor ON film.film_id=film_actor.film_id
INNER JOIN actor ON actor.actor_id=film_actor.actor_id
WHERE (first_name='Penelope' AND last_name='Monroe' AND description ILIKE '%sumo wrestler%')
--This returns a the film "Park Citizen" which is about a sumo wrestler and one of the actors is Penelope Monroe.

--6.2
SELECT title, length, rating, name FROM film
INNER JOIN film_category ON film.film_id=film_category.film_id
INNER JOIN category ON category.category_id=film_category.category_id
WHERE name='Documentary' AND length<60 AND rating='R'
--This returns "Cupboard Sinners" which is a documentary that is 56 minutes long and is rated R.

--6.3
SELECT title, first_name, last_name, rental_rate, return_date FROM inventory
INNER JOIN film ON film.film_id=inventory.film_id
INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
INNER JOIN customer ON customer.customer_id=rental.customer_id
WHERE customer.first_name='Matthew' 
AND customer.last_name='Mahan' 
AND rental_rate > 4
AND return_date > '2005-07-28'
AND return_date < '2005-08-01'
--This returns "Sugar Wonka" which Matthew Mahan paid $4.99 and returned on July 29th, 2005.

--6.4
SELECT title, first_name, last_name, description, replacement_cost FROM inventory
INNER JOIN film ON film.film_id=inventory.film_id
INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
INNER JOIN customer ON customer.customer_id=rental.customer_id
WHERE title || description ILIKE '%boat%'
AND customer.first_name ='Matthew'
AND customer.last_name ='Mahan'
ORDER BY replacement_cost DESC
LIMIT 1
--This returns Stone Fire which Matthew Mahan rented. It contains "boat" in the description and is the most expensive film.


