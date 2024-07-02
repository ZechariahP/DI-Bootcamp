//Mini Project - Random Quote Generator
//Part 1 : Quote Generator
//1. Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

//2. In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…
//3. Populate the array with a few quotes that you like.
//4. When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
//Important: When clicking on the button, make sure you don’t display the same quote twice in a row.
//Part 2 : Add Buttons
//1. In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
//Important: Don’t forget to set the id of the new quotes
//2. In the HTML file, under the displayed quote, create a few more buttons:
//A button that gives the number of character inside each quote (space included)
//A button that gives the number of character inside each quote (space NOT included)
//A button that gives the number of words in each quote
//A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.
//Part 3 : Filter Form
//1. Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

//2. Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.

const Arr1 = [{id: 0, author: "J.K. Rowling", quote: "Indifference and neglect often do much more damage than outright dislike."},
    {id: 1, author: "Albert Einstein", quote: "Imagination is more important than knowledge."},
    {id: 2, author: "Oscar Wilde", quote: "To live is the rarest thing in the world. Most people exist, that is all."},
    {id: 3, author: "J.R. Tolkein", quote: "Not all those who wander are lost."},
    {id: 4, author: "J.K. Rowling", quote: "It does not do to dwell on dreams and forget to live."},
    {id: 5, author: "J.K. Rowling", quote: "It is our choices that show what we truly are, far more than our abilities."},
    {id: 6, author: "J.K. Rowling", quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends."},
    {id: 7, author: "J.R. Tolkein", quote: "Courage is found in unlikely places."},
    {id: 8, author: "J.K. Rowling", quote: "We must all face the choice between what is right and what is easy."},
    {id: 9, author: "J.K. Rowling", quote: "It matters not what someone is born, but what they grow to be."},
    {id: 10, author: "Theodore Herzl", quote: "If you will it, it is no dream."},
    {id: 11, author: "J.K. Rowling", quote: "Dark times lie ahead of us and there will be a time when we must choose between what is easy and what is right."},
    {id: 12, author: "Golda Meir", quote: "Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement."},
    {id: 13, author: "David Ben-Gurion", quote:"In Israel, in order to be a realist you must believe in miracles."},
    {id: 14, author: "David Ben-Gurion", quote: "Let me tell you the one thing I have against Moses. He took us forty years into the desert in order to bring us to the one place in the Middle East that has no oil!"},
    {id: 15, author: "David Ben-Gurion", quote: "Anyone who believes you can't change history has never tried to write his memoirs."},
];

const button = document.getElementById("generate-quote");
const section = document.querySelector("section");
let currentQuote = {};
button.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * Arr1.length);
    while (Arr1[randomIndex] === currentQuote) {
        randomIndex = Math.floor(Math.random() * Arr1.length);
    }
    currentQuote = Arr1[randomIndex];
    section.innerHTML = `<p>${currentQuote.quote}</p><p>${currentQuote.author}</p>`;
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const quote = document.querySelector("#quote").value;
    const author = document.querySelector("#author").value;
    const newQuote = {
        id: Arr1.length,
        quote: quote,
        author: author,
    };
    Arr1.push(newQuote);
    console.log(Arr1);
    document.querySelector("#quote").value = "";
    document.querySelector("#author").value = "";
});

const buttonChar = document.getElementById("char-count");
const buttonCharNoSpace = document.getElementById("char-count-no-space");
const buttonWord = document.getElementById("word-count");
const buttonLike = document.getElementById("like");
buttonChar.addEventListener("click", () => {
    const quote = document.querySelector("p").textContent;
    alert(`The number of characters in the quote is ${quote.length}`);
});
buttonCharNoSpace.addEventListener("click", () => {
    const quote = document.querySelector("p").textContent;
    alert(`The number of characters in the quote is ${quote.replace(/\s/g, "").length}`);
});
buttonWord.addEventListener("click", () => {
    const quote = document.querySelector("p").textContent;
    alert(`The number of words in the quote is ${quote.split(" ").length}`);
});
//This makes the likes go up by 1 and then back to 0 if it is clicked again and then back to 1 if clicked again and so on.
buttonLike.addEventListener("click", () => {
    if (!currentQuote.likes) {
        currentQuote.likes = 1;
    } else {   
        currentQuote.likes = 0;
    }
    section.innerHTML = `<p>${currentQuote.quote}</p><p>${currentQuote.author}</p><p>${currentQuote.likes} like</p>`;
});

document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector("#filter-button");
    const previousButton = document.querySelector("#previous");
    const nextButton = document.querySelector("#next");
    const section = document.querySelector("section");
    const authorInputElement = document.querySelector("#author-filter");

    // Only add event listeners if elements exist
    filterButton?.addEventListener("click", () => {
        const author = authorInputElement.value.trim(); // Trim the input
        filteredQuotes = Arr1.filter(quote => quote.author.toLowerCase() === author.toLowerCase());
        if (filteredQuotes.length > 0) {
            index = 0;
            section.innerHTML = `<p>${filteredQuotes[index].quote}</p><p>${filteredQuotes[index].author}</p>`;
        } else {
            section.innerHTML = `<p>No quotes found for ${author}</p>`;
        }
    });

    previousButton?.addEventListener("click", () => {
        if (index > 0) {
            index--;
            section.innerHTML = `<p>${filteredQuotes[index].quote}</p><p>${filteredQuotes[index].author}</p>`;
        }
    });

    nextButton?.addEventListener("click", () => {
        if (index < filteredQuotes.length - 1) {
            index++;
            section.innerHTML = `<p>${filteredQuotes[index].quote}</p><p>${filteredQuotes[index].author}</p>`;
        }
    });
});