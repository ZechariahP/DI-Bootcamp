--Q1. What will be the OUTPUT of the following statement?
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--Prediction: The OUTPUT will be a new column labeled ft that shows FirstTab items that do not include NULL as an id. Therefore the output would be (5,'Pawan'),(6,'Sharlee'),(7,'Krish') 
--Answer: the output was count: 0. When comparing to NULL, there will be no result (count of 0).

--Q2. What will be the OUTPUT of the following statement?
	SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )	
--Prediction: Count is 3.
--Answer: Count is 2. Null and '5' are not counted leaving 2.

--Q3. What will be the OUTPUT of the following statement?
	SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--Prediction: Count is 2.
--Answer: Count is 0.

--Q4. What will be the OUTPUT of the following statement?
	SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--Prediction: Count is 3. 
--Answer: Count is 2. The sub-query has 1 value of 5 and FirstTab has 5 and NULL, so that would leave a count of 2 since NULL is not considered anyways.
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM SecondTab

