//1. Prompt the user for several words (separated by commas).
//2. Put the words into an array.
//3. Console.log the words one per line, in a rectangular frame as seen below.
//4. Check out the Hints and Requirements below.
//For example, if the user gives you:
//Hello, World, in, a, frame
//you will transform it to : ["Hello", "World", "in", "a", "frame"]
//Hint
//The number of stars that wraps the sentence, must depend on the length of the longest word.
	const severalWords = prompt("Please enter several words");
	const wordSplit = severalWords.split(" ");
	const longestWord = wordSplit.sort((a, b) => b.length - a.length)[0];
	const starString = (longestWord.replace(/./g, '*')) + "****";

function log(wordSplit) {
	
	const numberOfSpacesToAdd = longestWord.length - wordSplit.length;
	const emptyRow = " ".repeat(numberOfSpacesToAdd);
	console.log("* " + wordSplit + emptyRow + " *");
}



let oldArr = severalWords.slice();
let newWordSplit = oldArr.split(" ");

console.log(starString);
newWordSplit.forEach(log);
console.log(starString);

