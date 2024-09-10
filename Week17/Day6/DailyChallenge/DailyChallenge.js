/* Daily Challenge: Type Guard With Union Types
What You Will Learn:

How to use type guards in TypeScript.
How to handle different types of inputs from a union type.
How to perform specific operations based on the input type.
Time Needed: 30 minutes

Description: Create a function that uses type guards to handle different types of inputs from a union type and perform specific operations based on the input type.



Exercise:
Create a function processInput that accepts an input of type number | string | boolean. The function should perform the following operations:

If the input is a number, return its square.
If the input is a string, return the uppercase version of the string.
If the input is a boolean, return the negated value. */
function processInput(input) {
    if (typeof input === 'number') {
        return input * input;
    }
    else if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else {
        return !input;
    }
}
console.log(processInput(5)); // 25
console.log(processInput('hello')); // HELLO
console.log(processInput(true)); // false
