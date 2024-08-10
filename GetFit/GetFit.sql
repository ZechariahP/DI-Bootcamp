-- Create table for components
CREATE TABLE components (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    calories INT,
    protein INT,
    fat INT,
    sodium INT,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table for meals
CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a junction table for many-to-many relationship between meals and components
CREATE TABLE meal_components (
    meal_id INT REFERENCES meals(id) ON DELETE CASCADE,
    component_id INT REFERENCES components(id) ON DELETE CASCADE,
    quantity INT, -- Quantity of the component in the meal
    PRIMARY KEY (meal_id, component_id)
);

SELECT
    m.id AS meal_id,
    COALESCE(SUM(c.calories * mc.quantity), 0) AS calories_total,
    COALESCE(SUM(c.protein * mc.quantity), 0) AS protein_total,
    COALESCE(SUM(c.fat * mc.quantity), 0) AS fat_total,
    COALESCE(SUM(c.sodium * mc.quantity), 0) AS sodium_total
FROM
    meals m
JOIN
    meal_components mc ON m.id = mc.meal_id
JOIN
    components c ON mc.component_id = c.id
WHERE
    m.id = meal_id
GROUP BY
    m.id;