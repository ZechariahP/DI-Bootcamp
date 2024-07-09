//Exercise 1 : Comparison
//1. Create a function called compareToTen(num) that takes a number as an argument.
//2. The function should return a Promise:
//the promise resolves if the argument is less than or equal to 10
//the promise rejects if argument is greater than 10.
//Test:

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))


function compareToTen(num){
    return new Promise((resolve, reject) => {
        if(num <= 10){
            resolve(num + " is less than or equal to 10")
        }else{
            reject(num + " is greater than 10")
        }
    })
}

//Exercise 2 : Promises
//1. Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success")
    }, 4000)
})
promise.then(console.log).catch(console.error)

//Exercise 3 : Resolve & Reject
//1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
const promise2 = Promise.resolve(3)
promise2.then((result) => console.log(result)).catch((error) => console.error)
//2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const promise3 = Promise.reject("Boo!")
promise3.then((result) => console.log(result)).catch((error) => console.error)
