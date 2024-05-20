const sentence = "This cat is not that bad, I like him."
const wordNot = sentence.search("not");
const wordBad = sentence.search("bad");



if (wordNot === -1) {
	console.log(sentence)
} else if (wordNot < wordBad) {
	console.log('wordBad:', wordBad)
	console.log('wordNot:', wordNot)

	const firstPart = sentence.slice(0, wordNot);
	const secondPart = sentence.slice(wordBad + 3);
	console.log(firstPart + "good" + secondPart);
} else {
	console.log(sentence);
}
