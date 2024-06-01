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












































