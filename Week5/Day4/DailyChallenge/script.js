const text = document.getElementById('text');

const button = document.getElementsByTagName("button")[0];;
button.addEventListener("click", message);

function message(event) {
    event.preventDefault();
    if (allowOnlyLetters(text) === true) {
        alert("Thank you for your submission!");
    } else {
        alert("Please enter only letters");
    }
}

function allowOnlyLetters(text) {
    let letters = /^[A-Za-z]+$/;
    if (text.value.match(letters)) {
        return true;
    } else {
        return false;
    }
}

