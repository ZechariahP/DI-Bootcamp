/** function in typescript */
/** default params */
const addDefault = (a: number, b: number = 5) => {
  return a + b;
};

//optional params
const addOptional = (a: number, b?: number) => {
  return a + (b || 0);
};

//rest params
const addRest = (a: number, ...rest: number[]): number => {
  return rest.reduce((total, num) => total + num, a);
};

console.log(addRest(100, 100, 2, 4, 5)); // 211

//never type
const errorMessage = (message: string): never => {
    throw new Error(message);
};

//use of never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'number') return "number";
    if (typeof value === 'string') return "string";
    return errorMessage('value is not a string or number');
};

//function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
};

/** Assertions or Casting */
// as or < >

// aliases
type One = string;
type Two = string | number;
type Three = "hello" 

let a: One = 'abc';
console.log(a); // abc

let b = a as Two;
console.log(b); // abc
b = 12;
console.log(b); // 12

let c = a as Three; 
console.log(c); // abc
c = 'hello';
console.log(c); // hello

// < > - not used in react
let d = <One>'hi';

let e = <Two>12; 

// let f = <Three>'ggg';

/** Dom elements */
const img = document.querySelector('img') as HTMLImageElement;

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
    public name: string;
    private age: number;
    protected active: boolean;

    constructor(name: string, age: number, active: boolean) {
        this.name = name;
        this.age = age;
        this.active = active;
    }

    public getAge() {
        return `my age is ${this.age}`;
    }

    getActive() {
        return `Am I active? ${this.active}`;
    }

    setAge(age: number) {
        this.age = age;
    }
}

let user = new User('John', 25, true);
console.log(user.getAge()); // my age is 25
console.log(user.getActive()); // Am I active? true
console.log(user.name); // John

class Student extends User {
    constructor(name: string, age: number, active: boolean) {
        super(name, age, active);
    }
}

let student = new Student('Anne', 22, true);
