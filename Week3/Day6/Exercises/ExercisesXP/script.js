//Exercise 1: List of People
const people = ["Greg", "Mary", "Devon", "James"];
	//Part I - Review About Arrays
	people.splice(0, 1);
	console.log(people);
	people.splice(2, 1, "Jason");
	console.log(people);
	people.push("Zachary");
	console.log(people);
	console.log(people.indexOf("Mary"));
	console.log(people.slice(1, 3));
	console.log(people.indexOf("Foo")); //When looking for the index of a string that doesn't exist in an array, a value of -1 is returned.
	let last = people[3];
	console.log(last);
	console.log(people);
	//Part II - Loops
	for (let i = 0; i < people.length; i++) {
		console.log(people[i]);
	}

	for (let i = 0; i < people.length; i++) {
		if (i === 2) {
			break;
		}
		console.log(people[i]);
	}
//Exercise 2: Your Favorite Colors
const colors = ["black", "green", "red", "blue", "yellow"];

for (let i = 0; i < colors.length; i++) {
	console.log("My #" + (i + 1) + " choice is " + colors[i]);
}

const suffix = ["1st", "2nd", "3rd", "4th", "5th"];

for (let i = 0; i < colors.length; i++) {
	console.log("My " + (suffix[i]) + " choice is " + colors[i]);
}
//Exercise 3: Repeat The Question
while (true) {
	let answer = prompt("Please enter a number");
	let number = Number(answer);

	if (number >= 10) break;
}
//Exercise 4: Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log("apartments on first floor:", building.numberOfAptByFloor.firstFloor);
console.log("apartments on third floor:", building.numberOfAptByFloor.thirdFloor);

console.log("Second tenant:", building.nameOfTenants[1]);
console.log("Dan has this many rooms:", building.numberOfRoomsAndRent.dan[0]);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
	building.numberOfRoomsAndRent.dan[1] = 1200
}
console.log(building)
//Exercise 5: Family
const family = {
	mother: "Dahlia",
	father: "David",
	son: "Zachary",
	daughter: "Michelle",
}

for (const key in family) {
	console.log("key:", key)
	console.log("value:", family[key])
}
//Exerise 6: Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentance = ""

for (const key in details) {
	sentance = sentance + " " + key + " " + details[key]
}

console.log(sentance)
//Exercise 7: Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let acronym = ""
for (const name of names.sort()) {
	console.log(name)
	acronym = acronym + name[0]
}

console.log(acronym)