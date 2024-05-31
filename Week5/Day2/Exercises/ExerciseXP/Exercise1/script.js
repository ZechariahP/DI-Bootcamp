//Exercise 1: Change The Article
//Using a DOM property, retrieve the h1 and console.log it.

//Using DOM methods, remove the last paragraph in the <article> tag.
const root = document.firstElementChild;
const body = root.lastElementChild;
const article = body.firstElementChild;
const h1 = article.firstElementChild;
console.log(h1.textContent);

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = article.children[1];
h2.addEventListener("click", function() {
    h2.style.color = "red";
})

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3 = article.children[2];
h3.addEventListener("click", function() {
    h3.style.display = "none";
} )

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const button = document.querySelector("button");
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(paragraphs => {
    button.addEventListener("click", () => {
        paragraphs.style.fontWeight = "bold";
    })
})

//BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1.addEventListener("mouseover", randomFontSize)

function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1)
}

function randomFontSize() {
    h1.style.fontSize = getRandomNumber() + "px"
}

//BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const secondParagraph = getSecondParagraph()

secondParagraph.addEventListener("mouseover", makeSecondParagraphFadeout)

function makeSecondParagraphFadeout() {
    secondParagraph.classList.add("fadeout")
}

function getSecondParagraph() {
    return document.querySelectorAll("p")[1]
}

document.querySelectorAll("p")[1]


//Exercise 3: Transform The Sentence    

//Add this sentence to your HTML file then follow the steps :

//<p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
//<strong>end</strong> you <strong>will</strong> be great Developers!
//<strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


//In the JS file:

    //1. Declare a global variable named allBoldItems.

    //2. Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

    //3. Create a function called highlight() that changes the color of all the bold text to blue.

    //4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

    //5. Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

//Exercise 4: Volume Of A Sphere
//Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
/*<!doctype html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <title>Volume of a Sphere</title> 
        <style>  
            body {
                padding-top:30px;
            } 

            label,input {
                display:block;
            }  
        </style> 
    </head> 
    <body> 
        <p>Input radius value and get the volume of a sphere.</p> 
        <form  id="MyForm"> 
            <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
            <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
            <input type="submit" value="Calculate" id="submit">    
        </form> 
    </body> 
</html>*/











































