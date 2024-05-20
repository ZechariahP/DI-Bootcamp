//Exercise 1: Simple If/Else Statement
	let x = 4;
	let y = 1;

	if (x = 4) {
		console.log("x is the biggest number")
	} else {
		console.log("y is not the biggest number")
	}
//Exercise 2: Chihuahua
	let newDog = "Chihuahua"

	console.log(newDog.length);
	console.log(newDog.toUpperCase());
	console.log(newDog.toLowerCase());

	if (newDog = "Chihuahua") {
		console.log("I love Chihuahuas, it's my favorite dog breed.")
	} else {
		console.log("I don't care, I prefer cats.")
	}
//Exercise 3: Even Or Odd
	let N = prompt("Please enter a number.")

	if (N % 2 == 0) {
		//alert(N + " is an even number.")
	} else {
		//alert(N + " is an odd number.")
	}
//Exercise 4: Group Chat
	const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
	let sentence;

	if (users.length === 0) {
		sentence = "no one is online.";
	} else if (users.length === 1) {
		sentence = `${users[0]} is online.`;
	} else if (users.length === 2) {
		sentence = `${users[0]} and ${users[1]} are online`;
	} else {
		const remainingUsers = users.length - 2
		sentence = `${users[0]} and ${users[1]} and ${remainingUsers} more are online`;
	}
	console.log(sentence);
