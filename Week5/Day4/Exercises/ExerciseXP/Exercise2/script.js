//Exercise 2: Move The Box
//1. Copy the code above, to a structured HTML file.
//2. In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
//The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
//Hint : use clearInterval as soon as the box reaches the right end side of the container
//Hint : check out the demonstration in the Course Noted named JS Functions

let distance = 0
let interval

function myMove() {
    interval = setInterval(moveRedSquare, 1)
}

function moveRedSquare() {
    const WIDTH_OF_CONTAINER = 400
    const WIDTH_OF_SQUARE = 50
    if (distance === WIDTH_OF_CONTAINER - WIDTH_OF_SQUARE) return clearInterval(interval)
    distance = distance + 1
    const redSquare = document.getElementById("animate")
    redSquare.style.left = distance + "px"
}



