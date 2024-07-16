const _ = require('lodash');

const math = require('./math');


const a = 10;
const b = 5;
console.log("a = 10, b = 5");
console.log(`Addition: ${math.add(a, b)}`);
console.log(`Multiplication: ${math.multiply(a, b)}`);
console.log(`Maximum: ${_.max([a, b])}`);
console.log(`Minimum: ${_.min([a, b])}`);

/*
PS C:\Users\Zachary\Desktop\DI-Bootcamp\Week11\Day2\Exercises\ExerciseXP\Exercise5\math-app> node app.js
a = 10, b = 5
Addition: 15
Multiplication: 50
Maximum: 10
Minimum: 5
*/