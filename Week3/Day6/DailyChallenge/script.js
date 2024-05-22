const maxNumber = 6
let stars = ""
for (let i=0; i < maxNumber; i++) {
	stars = stars + " * "
	console.log(stars)
}

for (let i = 0;i < maxNumber;i++) {
	const numberOfStars = i + 1
	let lineOfStars = ""
	for (let j = 0;j < numberOfStars;j++) {
		lineOfStars = lineOfStars + " * "
	}
	console.log(lineOfStars)
}