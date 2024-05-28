function playTheGame() {
	const isUserReady = confirm("Do you want to play?");

	if (!isUserReady) {
		alert("No problem, Goodbye!");
		return;
	}

	const computerNumber = generateRandomNumber();

	let answer = Number(prompt("Enter a number"));
	let numberOfTries = 0
	while (answer != computerNumber) {
		numberOfTries = numberOfTries + 1
		if (numberOfTries === 3) {
			alert("Sorry, too many tries. The number was " + computerNumber);
			return;
		}
		if (!isOnlyNumbers(answer)) {
			alert("Sorry, not a number. Goodbye!");
			return;
		}

		if (!isBetweenZeroAndTen(answer)) {
			alert("Sorry, it's not a good number. Goodbye!")
			return;
		}

		if (answer > computerNumber) {
			alert("Your number is bigger than the computer's number. Guess again!")
		}
		if (answer < computerNumber) {
			alert("Your number is smaller than the computer's number. Guess again!")
		}
		answer = Number(prompt("Enter a number"))
		
	}
	alert("WINNER! The number was indeed " + computerNumber)
}



function isOnlyNumbers(str) {
	const regex = new RegExp(/^[0-9]*$/);
	return regex.test(str)
}

function isBetweenZeroAndTen(number) {
	return number >= 0 && number <= 10
}

function generateRandomNumber() {
	return Math.floor(Math.random() * 11)
}

function compareNumbers(userNumber, computerNumber) {
	if (userNumber === compareNumber) {
		alert("WINNER");
		return;
	}
	if (userNumber > computerNumber) {
		alert("Your number is bigger than the computer's number. Guess again!")
		return;
	}
}