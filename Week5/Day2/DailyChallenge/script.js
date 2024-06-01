const button = getButton();
const shuffleButton = document.getElementById("shuffle")

button.addEventListener("click", handleClick);
shuffleButton.addEventListener("click", shuffleStories)


function getFormValues() {
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;
    return {noun, adjective, person, verb, place}
}

function handleClick(event) {  
    shuffleStories(event, true)
}



function shuffleStories(event, isFirstStory = false) {
    event.preventDefault()
    const {noun, adjective, person, verb, place} = getFormValues()
    if ([noun, adjective, person, verb, place].includes("")) return

    const randomNumber = generateRandomNumber() // 0, 1, 2
    const stories = [writeStory(), writeStory2(), writeStory3()]
    const story = isFirstStory ? stories[0] : stories[randomNumber]
    appendStoryToPage(story)
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 3)
}

function appendStoryToPage(story) {
    const paragraph = document.getElementById("story")
    const span = document.createElement("span")
    span.innerText = story
    paragraph.textContent = ""
    paragraph.appendChild(span)
}

function writeStory() {
    const {noun, adjective, person, verb, place} = getFormValues()
    return `I like to look at ${noun}s, I think that they are ${adjective}. My favorite person is ${person}. They like to ${verb} when they are in ${place}`
}

function writeStory2() {
    const {noun, adjective, person, verb, place} = getFormValues()
    return `I do not like to look at ${noun}s, I think that they aren't ${adjective}. My favorite person isn't ${person}. They do not like to ${verb} when they are not in ${place}`
}

function writeStory3() {
    const {noun, adjective, person, verb, place} = getFormValues()
    return `I don't care for ${noun}s, they think that they are ${adjective}. I am indifferent to ${person}. They do not like to ${verb} while they are at ${place}.`
}

function getButton() {
    return document.getElementById("lib-button");
}

//4. Make sure you check the console for errors when playing the game.

//5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.