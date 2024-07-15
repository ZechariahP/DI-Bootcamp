/*console.log("hello NodeJS");
let obj = {
    a: 'a',
    b: 'b',
}*/

//console.log(obj);

//hello('John');

const hello = (name) => {
    console.log(`Hello ${name}`);
}

const sum = (a, b) => {
    return a + b;
}

module.exports = {
    hello,
};
