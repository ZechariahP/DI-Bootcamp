//Exercise 4: Volume Of A Sphere
//1. Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

const form = document.getElementById("my-form");
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const r = Number(radius.value);
    if (Number.isNaN(r)) return;
    const v = (4/3)*Math.PI*(r ** 3);
    volume.value = v.toFixed(2);
}

//radius r
//volume = 4/3*pi*r^3