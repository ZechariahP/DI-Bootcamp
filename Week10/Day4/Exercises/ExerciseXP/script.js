//Exercise 1 : Giphy API
//With your knewly accumulated knowledge of the Fetch API lets write some cool code!
//You will work with this part of the documention
//You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
//Explanation of the Gif URL and the queries
//q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs
//rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation
//api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
//1. Create a program to retrieve the data from the API URL provided above.
//Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
//Make sure to check the status of the Response and to catch any occuring errors.

function getGiphy() {
    fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        .then(response => response.json())
        .then(objectGiphy => console.log(objectGiphy))
        .catch(error => console.error(error));
}

getGiphy();

//Exercise 2 : Giphy API
//1. Read carefully the documention to understand all the possible queries that the URL accept.
//2. Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
//Make sure to check the status of the Response and to catch any occuring errors.
//3. Console.log the Javascript Object that you receive.

function getSunGiphy() {
    fetch("https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2")
        .then(response => response.json())
        .then(objectSunGiphy => console.log(objectSunGiphy))
        .catch(error => console.error(error));
}

getSunGiphy();

//Exercise 3 : Async Function
//Improve the program below :

//fetch("https://www.swapi.tech/api/starships/9/")
    //.then(response => response.json())
    //.then(objectStarWars => console.log(objectStarWars.result));
//1. Create an async function, that will await for the above GET request.
//The program shouldn’t contain any then() method.
//2. Make sure to check the status of the Response and to catch any occuring errors.

async function getStarWars() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        const objectStarWars = await response.json();
        console.log(objectStarWars.result);
    } catch (error) {
        console.error(error);
    }
}
getStarWars();

//Exercise 4: Analyze
//Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
//Outcome: The console will first log "calling" when the page loads and then after 2 seconds, it will log  "resolved".
