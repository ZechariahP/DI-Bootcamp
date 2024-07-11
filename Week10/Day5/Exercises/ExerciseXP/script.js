//Star Wars Web App Using AJAX API
//In this project you will have to build a single page application that uses AJAX to retrieve information and display it on your website as follows:
//You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
//Note: The API contains 83 different characters
//Create your HTML file, and add the relevant elements.

//In your JS file, create your functions :
//to retrieve the elements from the DOM.
//to get the data from the API (star wars characters).
//to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

//Display the data using AJAX. Make sure to display a loading message as follows:
//You can use any of these animation icons for the loading message.
//Fontawesome link :
//https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
//If there is an error getting the data, display a message as follows:
//You can use your own css to style the website as you see fit
const nameElement = document.getElementById('name');
const heightElement = document.getElementById('height');
const genderElement = document.getElementById('gender');
const birthYearElement = document.getElementById('birth-year');
const homeworldElement = document.getElementById('home-world');

async function retrieveUserData(id) {
    const url = `https://www.swapi.tech/api/people/${id}`;
    document.getElementById('error').classList.remove('show');
    document.getElementById('error').classList.add('hidden');

    try {
        const response = await fetch(url)
        const resJson = await response.json();
        const {name, height, gender, birth_year, homeworld} = resJson.result.properties;
        const homeworldName = await fetchHomeWorld(homeworld);
        [nameElement, heightElement, genderElement, birthYearElement, homeworldElement].forEach(element => {
            element.classList.add('show');
            element.classList.remove('hidden');
        });
        displayProperties(name, height, gender, birth_year, homeworldName);
        hideLoadingSpinner();
    } catch(error) {
            console.error(error)
            document.getElementById('error').classList.add('show');
            document.getElementById('error').classList.remove('hidden');
            [nameElement, heightElement, genderElement, birthYearElement, homeworldElement].forEach(element => {
                element.classList.add('hidden');
                element.classList.remove('show');
            });
    }
}

function displayProperties(name, height, gender, birth_year, homeworld) {
    nameElement.innerText = `Name: ${name}`;
    heightElement.innerText = `Height: ${height}`;
    genderElement.innerText = `Gender: ${gender}`;
    birthYearElement.innerText = `Birth Year: ${birth_year}`;
    homeworldElement.innerText = `Homeworld: ${homeworld}`;
}

async function fetchHomeWorld(homeworld) {

    try {
        const response = await fetch(homeworld);
        const resJson = await response.json();
        const homeworldName = resJson.result.properties.name;
        return homeworldName;
    } catch(error) {
        console.error(error)
    }
}

document.getElementById('button').addEventListener('click', handleClick);

function handleClick() {
    showLoadingSpinner();
    const randomId = getRandomId();
    retrieveUserData(randomId);
}    

function showLoadingSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.classList.remove("hidden");
    spinner.classList.add("show");
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.classList.remove("show");
    spinner.classList.add("hidden");
}

function getRandomId() {
    const MAX_NUMBER = 83;
    return Math.floor(Math.random() * MAX_NUMBER) + 1;
}
