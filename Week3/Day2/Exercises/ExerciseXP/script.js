// Exercise 1: Your Favorite Food
let favoriteFood = "pasta";
let favoriteMeal = "dinner";
let favoriteFoodAndMeal = "I eat " + favoriteFood + " at every " + favoriteMeal;
console.log(favoriteFoodAndMeal);
// Exercise 2: Series 
// Part I
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = "3 series : ";
let myWatchedSeriesSentence = "I watched " + myWatchedSeriesLength + myWatchedSeries;
console.log(myWatchedSeriesSentence);
// Part II
myWatchedSeries[2] = "friends";
myWatchedSeries.push("shogun");
myWatchedSeries.unshift("fallout");
delete myWatchedSeries[0];
let moneyHeist = myWatchedSeries[2];
console.log(moneyHeist[2]);
console.log(myWatchedSeries);
// Exercise 3: The Temperature Converter 
let boilingTempCelsius = "100\u00B0C";
let boilingTempFahrenheit = "212\u00B0F";
let tempCelsiusToFahrenheit = boilingTempCelsius + " is " + boilingTempFahrenheit;
console.log(tempCelsiusToFahrenheit);
// Exercise 4: Guess The Answers #1
    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 //It's just basic arithmetic. 
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23 //Same as previous comment.
    // Actual: 23

    console.log(3 + 4 + '5');
    // Prediction: 75 //Putting '' around a number will prevent it from being interpreted as an operation.
    // Actual: 75
// Exercise 5: Guess The Answers #2
	console.log(typeof(15))
	// Prediction: number //It returns a numeric value.
	// Actual: number

	console.log(typeof(5.5))
	// Prediction: number //It returns a numeric value.
	// Actual: number

	console.log(typeof(NaN))
	// Prediction: number //It returns a numeric value.
	// Actual: number

	console.log(typeof("hello"))
	// Prediction: string //Any word with "" around it will be interpreted as a string.
	// Actual: string

	console.log(typeof(true))
	// Prediction: boolean //True is a type of boolean.
	// Actual: boolean

	console.log(typeof(1 != 2))
	// Prediction: boolean //It returns false and either true or false is a type of boolean.
	// Actual: boolean

	console.log("hamburger" + "s")
	// Prediction: hamburgers //They are two strings being joined together.
	// Actual: hamburgers

	console.log("hamburgers" - "s")
	// Prediction: hamburger //s is subtracted from hamburgers.
	// Actual: NaN //since they are both strings, "s" is not contained in "hambergers"

	console.log("1" + "3")
	// Prediction: 13 //They are two strings being joined together.
	// Actual: 13

	console.log("1" - "3")
	// Prediction: undefined //This isn't a mathematical operation and since the string "3" is not contained in "1" then it will be undefined.
	// Actual: -2 //"1" is equal to 1 and "3" is equal to 3.

	console.log("johnny" + 5)
	// Prediction: johnny5 //5 can be treated as a string since there isn't a mathematical operation being done.
	// Actual: johnny5

	console.log("johnny" - 5)
	// Prediction: undefined //5 is not contained in the string "johnny".
	// Actual: NaN //A mathematical operation can not be done with a string and a number

	console.log(99 * "hello")
	// Prediction: 99 "hello"s //the string is multiplied by 99, so the screen should show 99 of the string.
	// Actual: NaN //A mathematical operation can not be done with a string and a number

	console.log(1 != 1)
	// Prediction: false //1 is equal to 1
	// Actual: false

	console.log(1 == "1")
	// Prediction: true //1 is still equal to "1" because the number and string are the same.
	// Actual: true

	console.log(1 === "1")
	// Prediction: false //The value is 1 either way, but 1 is a number and "1" is a string.
	// Actual: false
// Exercise 6: Guess The Answers #3
	console.log(5 + "34")
	// Prediction: 534 //"34" is treated as a string, so 5 is simply added to the front of it.
	// Actual: 534

	console.log(5 - "4")
	// Prediction: 1 //"4" is a string that is a numeric value, so this can be treated as a mathematical operation when doing substraction.
	// Actual: 1

	console.log(10 % 5)
	// Prediction: NaN //The percentage sign is not an operator, so it's NaN.
	// Actual: 0 //The percentage sign is actually an operator and means modulus. Since 10 is divided by 5 into 2 without a remainder, the answer will be 0

	console.log(5 % 10)
	// Prediction: NaN //The percentage sign is not an operator, so it's NaN.
	// Actual: 5 // 5 divided by 10 is 5/10 which requires a value of 5 more to make it 10/10, therefore the remainder is 5.

	console.log(" " + " ")
	// Prediction: undefined //The plus sign cannot be treated as string.
	// Actual: //Instead of undefined, it returns nothing, so just a blank.

	console.log(" " + 0)
	// Prediction: 0 //A zero with a space in front of it.
	// Actual: 0 //It's a zero with a space in front of it.

	console.log(true + true)
	// Prediction: 2 //true is treated as a numerical value of 1 when using the + operator.
	// Actual: 2

	console.log(true + false)
	// Prediction: 1 //false is treated as a numerical value of 0 when using the + operator.
	// Actual: 1

	console.log(false + true)
	// Prediction: 1 //false = 0 and true = 1
	// Actual: 1

	console.log(false - true)
	// Prediction: -1 //0 - 1 = -1
	// Actual: -1

	console.log(!true)
	// Prediction: false //not true is false
	// Actual: false

	console.log(3 - 4)
	// Prediction: -1 //3 - 4 = -1
	// Actual: -1
