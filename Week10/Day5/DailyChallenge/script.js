//In this application we’re going receive data from two asynchronous sources.

//You will use :
//This documentation: https://www.exchangerate-api.com/docs/overview
//Your API Key: 23e264162727e59caeceeb6a
//Example Request: https://v6.exchangerate-api.com/v6/23e264162727e59caeceeb6a/latest/USD

//1. The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

//2. First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

//3. To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
//Hint: You could also supply an optional AMOUNT variable in the query of the request.

//4. Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
//Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.



fetchCurrencies();
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");

document.getElementById('input').addEventListener('keyup',handleClick);
fromSelect.addEventListener('change', handleClick);
toSelect.addEventListener('change', handleClick);

function fetchCurrencies() {

    const url = "https://v6.exchangerate-api.com/v6/23e264162727e59caeceeb6a/codes";
    fetch(url)
    .then(response => response.json())
    .then(reponse => populateDropdown(reponse.supported_codes))
    .catch(error => console.error(error))
}

function populateDropdown(codes) {
    const entries = Object.entries(codes);

    for (const entry of entries) {
        const [index, [code, name]] = entry;
        const option = document.createElement("option");
        const option2 = document.createElement("option");
        option.innerText = code + " - " + name;
        option2.innerText = code + " - " + name;
        option.value = code;
        option2.value = code;
        fromSelect.appendChild(option);
        toSelect.appendChild(option2);
    }
}

async function handleClick() {
    const currency1 = fromSelect.value;
    const currency2 = toSelect.value;
    const input = document.getElementById("input");
    const summary = document.getElementById("summary");

    const url = `https://v6.exchangerate-api.com/v6/23e264162727e59caeceeb6a/pair/${currency1}/${currency2}`;
    try {
    const response = await fetch(url);
    const resJson = await response.json();
    const rate = resJson.conversion_rate;
    const amount = Number(input.value);
    const total = amount * rate;
    summary.innerText = `${amount} ${currency1} = ${total} ${currency2}`;
    } catch (error) {
        console.error(error);
    }
}

document.getElementById("switch").addEventListener("click", () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    handleClick();
});