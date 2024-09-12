"use strict";
/** function in typescript */
/** default params */
const addDefault = (a, b = 5) => {
    return a + b;
};
//optional params
const addOptional = (a, b) => {
    return a + (b || 0);
};
//rest params
const addRest = (a, ...rest) => {
    return rest.reduce((total, num) => total + num, a);
};
console.log(addRest(100, 100, 2, 4, 5)); // 211
//never type
const errorMessage = (message) => {
    throw new Error(message);
};
//use of never type
const numberOrString = (value) => {
    if (typeof value === 'number')
        return "number";
    if (typeof value === 'string')
        return "string";
    return errorMessage('value is not a string or number');
};
function add(a, b) {
    return a + b;
}
;
let a = 'abc';
console.log(a); // abc
let b = a;
console.log(b); // abc
b = 12;
console.log(b); // 12
let c = a;
console.log(c); // abc
c = 'hello';
console.log(c); // hello
// < > - not used in react
let d = 'hi';
let e = 12;
// let f = <Three>'ggg';
/** Dom elements */
const img = document.querySelector('img');
/** Classes */
// access modifiers
/**
 * public - anywhere
 * private - within the class
 * protected - within the class and its subclasses
 * readonly - can be assigned only once
 * static - can be accessed without creating an instance of the class
 * abstract - can't be instantiated
 *
 */
class User {
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    getAge() {
        return `my age is ${this.age}`;
    }
    getActive() {
        return `Am I active? ${this.active}`;
    }
    setAge(age) {
        this.age = age;
    }
}
let user = new User('John', 25, true);
console.log(user.getAge()); // my age is 25
console.log(user.getActive()); // Am I active? true
console.log(user.name); // John
class Student extends User {
    constructor(name, age, active) {
        super(name, age, active);
    }
}
let student = new Student('Anne', 22, true);
