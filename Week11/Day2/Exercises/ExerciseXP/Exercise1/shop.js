const products = require('./products');

function findProduct(productName) {
    return products.find(product => product.name === productName);
};

console.log(findProduct("Laptop"));
console.log(findProduct("T-shirt"));
console.log(findProduct("Smartphone"));
console.log(findProduct("Dress"));
console.log(findProduct("Tablet"));
console.log(findProduct("Jeans"));

/*PS C:\Users\Zachary\Desktop\DI-Bootcamp> cd Week11\Day2\Exercises\ExerciseXP
PS C:\Users\Zachary\Desktop\DI-Bootcamp\Week11\Day2\Exercises\ExerciseXP> node shop.js
{ name: 'Laptop', price: 1000, category: 'Electronics' }
{ name: 'T-shirt', price: 20, category: 'Clothing' }
{ name: 'Smartphone', price: 500, category: 'Electronics' }
{ name: 'Dress', price: 50, category: 'Clothing' }
{ name: 'Tablet', price: 200, category: 'Electronics' }      
{ name: 'Jeans', price: 30, category: 'Clothing' }
PS C:\Users\Zachary\Desktop\DI-Bootcamp\Week11\Day2\Exercises\ExerciseXP>*/