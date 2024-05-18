//Exercise 1
	const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
	fruits.shift();
	console.log(fruits);
	fruits.sort();
	console.log(fruits);
	fruits.push("Kiwi");
	console.log(fruits);
	fruits.splice(0,1);
	console.log(fruits);
	fruits.reverse();
	console.log(fruits);
//Exercise 2
	const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
	console.log(moreFruits[1][1][0]);

