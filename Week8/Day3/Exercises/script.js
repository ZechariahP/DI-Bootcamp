/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers multiply by 2
 * For example:
 * Give this array [1,2,3,4]
 * result [2,4,6,8]
 */
const multiplyByTwo = (arr) => {
    return arr.map(num => num * 2);
}
console.log(multiplyByTwo([1, 2, 3, 4])); // [2, 4, 6, 8]

/*let users = [
    { userid: 1, name: "John", email: "jjj@gmail.com" },
    { userid: 2, name: "Marry", email: "mmm@gmail.com" },
    { userid: 3, name: "Anne", email: "aaa@gmail.com" },
    { userid: 3, name: "Anne", email: "aaa@gmail.com" },
  ];

  //Use the map function to transform the json object into div elements and then append them to index.html
    const renderUsers = (users) => {
        const usersDiv = users.map(user => {
            return `<div>${user.name} - ${user.email}</div>`;
        });
        document.body.innerHTML = usersDiv.join('');
    }
    renderUsers(users);*/
    
/* Exercise
 * Create a function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3 using a loop and not the filter function
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */
const greaterThanThree = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(greaterThanThree([0, 1, 1, 2, 3, 5, 8])); // [5, 8]

const users = [
    { id: 1, name: "John", email: "jjj@gmail.com" },
    { id: 2, name: "Mor", email: "mmm@gmail.com" },
    { id: 3, name: "Marry", email: "marry@gmail.com" },
    { id: 4, name: "Ron", email: "ron@gmail.com" },
  ];

  //Use the filter function to filter out the users with a name containing 'r' case insensitive and then append them to index.html
    const renderUsers = (users) => {
        const usersDiv = users.filter(user => user.name.toLowerCase().includes('r')).map(user => {
            return `<div>${user.id} - ${user.name} - ${user.email}</div>`;
        });
        document.body.innerHTML = usersDiv.join('');
    }
    renderUsers(users);

    //get the user object with id equal to 3
    const user = users.find(user => user.id === 3);
    console.log(user);

/* Exercise
 * Create a function that gets an array of Numbers as input
 * and returns the sum of all numbers
 * For example:
 * Given this array [2, 5, 10,100]
 * result 117
 */
const sumOfNumbers = (arr) => {
    return arr.reduce((accumulator, num) => accumulator + num, 0);
}
console.log(sumOfNumbers([2, 5, 10, 100])); // 117

// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
const sumOfDigits = (n) => {
    return n.toString().split('').map(Number).reduce((accumulator, num) => accumulator + num, 0);
}
console.log(sumOfDigits(16)); // 7
