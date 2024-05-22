//Exercise 1
for (var i = 0; i < 15; i++) {
	if (i % 2 === 0) {
		console.log(i + " is even")
	} else {
		console.log(i + " is odd")
	}
}
//Exercise 2
let names= ["john", "sarah", 23, "Rudolf",34]

for (let i = 0; i < names.length; i++){
    if(typeof(names[i])=== "string"){
        if(names[i][0] === names[i][0].toUpperCase()){
            console.log(names[i])
        }
    }
}

for (let i = 0; i < colors.length; i++) {
if (typeof colors[i] !== "string") {
 	console.log("Not a string");
		continue;
}
 	console.log(colors[i]);
}