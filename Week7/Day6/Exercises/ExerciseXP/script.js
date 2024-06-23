//Exercise 1: Scope
/*// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()*/
// #1.2 What will happen if the variable is declared
//Prediction: The alert will show "inside the funcOne function 3". The variable a is declared within the function and is being reassigned to 3 within the if statement.
// with const instead of let ?
//Prediction: If const is used instead of let, the code will throw an error because the variable a is being reassigned within the function. Const does not allow reassignment of variables.
//#2
/*const a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared
//Prediction: The alert will show "inside the funcThree function 0" and then "inside the funcThree function 5". The variable a is declared outside of the function and is being reassigned to 5 within the funcTwo function.
// with const instead of let ?
//Prediction: If const is used instead of let, the code will throw an error because the variable a is being reassigned within the function. Const does not allow reassignment of variables.*/

/*//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()*/

//Prediction: funcFour() will display "hello" in a window, but funcFive() will throw an error due to a only being declared within function funcFour(). Everything that is defined in a function will not be accessible outside of that function.
//Actual: It worked without any errors.
//#4
/*const a = 1;
function funcSix() {
    const a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared
//Prediction: The alert will show "inside the funcSix function test". Even though a is declared outside of funcSix(), because it is let and not, it can be reassigned within the function.
// with const instead of let ?
//Prediction: The code will throw an error because const can can only be assigned once.
//Actual: It worked without any errors and the alert displayed "inside the funcSix function test".*/

/*//#5
const a = 2;
if (true) {
    const a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
//Prediction: The alert will show "in the if block 5" and then "outside of the if block 2". The variable a is declared outside of the if block and is being reassigned within the if block.
// with const instead of let ? */
//Prediction: The code will throw an error because const can only be assigned once.
//Actual: It worked without any errors and the alert displayed "in the if block 5" and then "outside of the if block 2".*/

//Exercise 2: Ternary Operator
//function winBattle(){
//    return true;
//}
/*//1. Transform the winBattle() function to an arrow function.
const winBattle = () => true;
winBattle();
//2. Create a variable called experiencePoints.
let experiencePoints;
//3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
experiencePoints = winBattle() ? 10 : 1;
//4. Console.log the experiencePoints variable.
console.log(experiencePoints);*/

//Exercise 3: Is It A String?
//1. Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
//Check out the example below to see the expected output
/*//Example:

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false*/
/*const isString = (str) => typeof str === 'string';
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));*/

//Exercise 4: Colors
/*const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//1. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    console.log(`${i + 1}# choice is ${colors[i]}`);
}
//2. Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
const isViolet = colors.includes("Violet");
console.log(isViolet ? "Yeah" : "No...");*/
//Hint : Use the array methods taught in class. Look at the lesson Array Methods.

/*//Exercise 5: Colors #2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
//1. Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
//Hint : Use the array methods taught in class and ternary operator.
colors.forEach((color, i) => {
    console.log(`${i + 1}${ordinal[i + 1] || ordinal[0]} choice is ${color}`);
});*/

//Exercise 6: Bank Details
//In this exercise, you have to decide which type of variables you have to use (ie. let or const):
//1. Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 0; 
//2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const vat = 0.17;
//3. Create an array with all your monthly expenses, both positive and negative (money made and money spent).
//Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
const details = [200, -100, 146, 167, -2900];
//4. Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
const currentBankAccount = addVat(details);
console.log("currentBankAccount:", currentBankAccount);

/*function addVat(expenses) {
    let total = 0;
    expenses.forEach((expense) => {
        const numExpense = Number(expense);
        console.log("numExpense:", numExpense);
        const expenseWithVat = numExpense * (1 + vat);
        console.log("expenseWithVat:", expenseWithVat);
        total += expenseWithVat;
    });
    return total;
}*/

//Refactored version
function addVat(expenses) {
    return expenses.reduce((total, current) =>
        (total += Number(current) * (1 + vat)), 0);
}

//5. Display your current bankAccount standing at the end of the month.
