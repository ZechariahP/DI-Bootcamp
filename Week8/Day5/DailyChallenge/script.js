//Daily Challenge: Truth Or False

//Create a function that returns true if all parameters are truthy, and false otherwise.

//Examples
//allTruthy(true, true, true) ➞ true

//allTruthy(true, false, true) ➞ false

//allTruthy(5, 4, 3, 2, 1, 0) ➞ false

function allTruthy(...args) {
    return args.every(Boolean);
}
console.log(allTruthy(true, true, true))
console.log(allTruthy(true, false, true))
console.log(allTruthy(5, 4, 3, 2, 1, 0))
