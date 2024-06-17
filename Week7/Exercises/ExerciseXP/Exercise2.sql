SELECT * FROM customer

SELECT CONCAT_WS(' ',first_name,last_name) AS full_name FROM customer

SELECT DISTINCT create_date FROM customer

SELECT * FROM customer ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

SELECT address, phone FROM customer INNER JOIN address ON customer.address_id=address.address_id WHERE (district='Texas')

SELECT * FROM film WHERE (film_id=150 OR film_id=15)

SELECT film_id, title, description, length, rental_rate FROM film WHERE (title='Breaking Home')

SELECT film_id, title, description, length, rental_rate FROM film WHERE (title LIKE 'Br%')

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10

SELECT * FROM film ORDER BY rental_rate ASC OFFSET 10 FETCH FIRST 10 ROWS ONLY

SELECT payment.customer_id, first_name, last_name, amount, payment_date FROM customer INNER JOIN payment ON payment.customer_id=customer.customer_id ORDER BY payment.customer_id

SELECT * FROM film LEFT JOIN inventory ON film.film_id=inventory.film_id WHERE inventory_id IS NULL

SELECT * FROM city INNER JOIN country ON city.country_id=country.country_id

SELECT staff_id, customer.customer_id, first_name, last_name, amount, payment_date FROM payment INNER JOIN customer ON customer.customer_id=payment.customer_id ORDER BY staff_id, customer.customer_id ASC