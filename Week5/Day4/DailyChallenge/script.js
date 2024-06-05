const text = document.getElementById('text');
text.addEventListener("input", function(e) {
    text.value = "/^[A-Za-z]+$/";
    /*if (text.value.length > 0) {
        text.style.border = "2px solid green";
    } else {
        text.style.border = "2px solid red";
    }*/
});

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

