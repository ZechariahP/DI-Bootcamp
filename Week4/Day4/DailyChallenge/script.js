//In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
//We will provide the HTML page.
//You only have to work with a JS file.

//1. Create an array which value is the planets of the solar system.
const planets = [
 {name: "Mercury", moons: 0},
 {name: "Venus", moons: 0}, 
 {name: "Earth", moons: 1}, 
 {name: "Mars", moons: 2}, 
 {name: "Jupiter", moons: 95}, 
 {name: "Saturn", moons: 146}, 
 {name: "Uranus", moons: 28}, 
 {name: "Neptune", moons: 16}
 ]
//2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for (const planet of planets) {
	const planetDiv = document.createElement("div")
	planetDiv.classList.add("planet", planet.name.toLowerCase())

	for (let i=0; i < planet.moons; i++) {
		const moonDiv = document.createElement("div")
		moonDiv.classList.add("moon")
		moonDiv.style.left = i * 10 + "px";
		planetDiv.appendChild(moonDiv)
	}

	const section = document.querySelector(".listPlanets")
	section?.appendChild(planetDiv)
}
//3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).

//4. Finally append each div to the <section> in the HTML (presented below).
//5. Bonus: Do the same process to create the moons.
	//Be careful, each planet has a certain amount of moons. How should you display them?
	//Should you still use an array for the planets ? Or an array of objects ?