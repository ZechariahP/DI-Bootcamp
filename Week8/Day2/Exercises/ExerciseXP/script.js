//Exercises XP
//Exercise 1: Find The Sum
//1. Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const sum = (a, b) => a + b;

//Exercise 2: Kg and Grams
//Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
//1. First, use function declaration and invoke it.
function kgToGrams(kg) {
  return kg * 1000;
}
const grams = kgToGrams(5);
console.log(grams);//5000
//2. Then, use function expression and invoke it.
const kgToGrams2 = function(kg) {
  return kg * 1000;
}
const grams2 = kgToGrams2(5);
console.log(grams2);//5000
//3. Write in a one line comment, the difference between function declaration and function expression.
//A function declaration has a name, while function expression is anonymous.
//You can use a function declaration before it's defined, but not a function expression.
//4. Finally, use a one line arrow function and invoke it.
const kgToGrams3 = kg => kg * 1000;
const grams3 = kgToGrams3(5);
console.log(grams3);//5000
//Exercise 3: Fortune Teller
//1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
//2. The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
(function(children, partner, location, job){
  const div = document.createElement('div');
  div.textContent = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  document.body.appendChild(div);
})(3, 'John', 'Paris', 'developer');

//Exercise 4: Welcome
//John has just signed in to your website and you want to welcome him.
//1. Create a Bootstrap Navbar in your HTML file.
//2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function(name){
    const div = document.createElement('div');
    div.innerText = name;
    const image = document.createElement('img');
    image.src = "C:/Users/Zachary/Desktop/DI-Bootcamp/Week8/Day2/Exercises/ExerciseXP/ProfilePicture.jpg";
    image.style.width = '50px';
    const navbar = document.querySelector('.navbar');
    navbar.appendChild(div);
    navbar.appendChild(image);
    })('Zachary');

//Exercise 5: Juice Bar
//You will use nested functions, to open a new juice bar.
//Part I:
//1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
//2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
//3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
/*function makeJuice(size) {
  function addIngredients(ingredient1, ingredient2, ingredient3) {
    const div = document.createElement('div');
    div.textContent = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`;
    document.body.appendChild(div);
  }
  addIngredients('apple', 'banana', 'orange');
}*/
makeJuice('small');
//Part II:
//1. In the makeJuice function, create an empty array named ingredients.
//const ingredients = [];
//2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
/*function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
        }
    addIngredients('apple', 'banana', 'orange');
}*/
//3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
/*function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
        }
    function displayJuice() {
        const div = document.createElement('div');
        div.textContent = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}`;
        document.body.appendChild(div);
    }
    addIngredients('apple', 'banana', 'orange');
    displayJuice();
}*/
//4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
function makeJuice(size) {
    const ingredients = []; // Declare the ingredients array
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }
    function displayJuice() {
        const div = document.createElement('div');
        div.textContent = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}`;
        document.body.appendChild(div); // Append the div to the document body
    }
    addIngredients('apple', 'banana', 'orange');
    addIngredients('strawberry', 'blueberry', 'raspberry');
    displayJuice();
}
makeJuice('small');

