let numberOfBeers = getUserInput();
let numberOfBeersToTakeAway = 1;

function getUserInput() {
	let answer = prompt("How many beers?")
	if (answer == "") return alert("Please enter something");
	const number = Number(answer);
	if (Number.isNaN(number)) return alert("Please enter a number");
	return number;
}

while (numberOfBeers > 0) {
	const stanza = makeStanza(numberOfBeers, numberOfBeersToTakeAway);
	console.log(stanza);
	numberOfBeers -= numberOfBeersToTakeAway;
	numberOfBeersToTakeAway++;
}

function makeStanza(num, counter) {
	const bottleOrBottles = getBottlesOrBottles(num); 
	const bottlesToTakeAway = getSmallerNumber(counter, num)
	const remainingBottles = getBiggerNumber(num - counter, 0)
	const remainingBottleOrBottles = getBottlesOrBottles(remainingBottles)

	const stanza = `${num} ${bottleOrBottles} of beer on the wall
	 				${num} ${bottleOrBottles} of beer
	 				Take ${bottlesToTakeAway} down, pass it around
	 				${remainingBottles} ${remainingBottleOrBottles} of beer on the wall`;

	 				return stanza;
}

function getBiggerNumber (a, b) {
	return a > b ? a : b;
}

function getSmallerNumber(a, b) {
	return a < b ? a : b;
}

function isPlural(num) {
	return num > 1;
}

function getBottlesOrBottles(num) {
	return isPlural(num) ? "bottles" : "bottle";
}
