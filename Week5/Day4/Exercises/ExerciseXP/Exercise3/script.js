//Exercise 3: Drag & Drop
//1. Copy the code above, to a structured HTML file.
//2. In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

const yellowBox = document.getElementById("target");

yellowBox.addEventListener("dragover", handleDragEnter);
yellowBox.addEventListener("dragenter", handleDragEnter);
yellowBox.addEventListener("dragleave", handleDragLeave);
yellowBox.addEventListener("drop", handleDrop);

function handleDragEnter(event) {
    event.preventDefault();
    yellowBox.classList.add("is-hovered")
}

function handleDragLeave(event) {
    event.preventDefault();
    yellowBox.classList.remove("is-hovered");

}

function handleDrop() {
    yellowBox.classList.remove("is-hovered");
    yellowBox.appendChild(box);
}