//Exercise 2: Work With Forms
//Copy the code below, into a structured HTML file:

    //<form>
        //<label for="fname">First name:</label><br>
        //<input type="text" id="fname" name="firstname"><br>
        //<label for="lname">Last name:</label><br>
        //<input type="text" id="lname" name="lastname"><br><br>
        //<input type="submit" value="Submit" id="submit">
    //</form> 
    //<ul class="usersAnswer"></ul>

//1. Retrieve the form and console.log it.
const form = document.querySelector("form");
console.log(form);
//2. Retrieve the inputs by their id and console.log them.
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");

console.log(form, firstName, lastName);
//3. Retrieve the inputs by their name attribute and console.log them.
const firstNameValue = document.querySelector("[name=firstname]");
const lastNameValue = document.querySelector("[name=lastname]");
console.log(form, firstNameValue.value, lastNameValue.value);

//4. When the user submits the form (ie. submit event listener)
    //use event.preventDefault(), why ? We don't want the page to be reloaded when pressing submit.
    //get the values of the input tags,
    //make sure that they are not empty,
    //create an li per input value,
    //then append them to a the <ul class="usersAnswer"></ul>, below the form.


function logFormInputs(e) {
    e.preventDefault();
    const firstNameValueE = document.querySelector("[name=firstname]");
    const lastNameValueE = document.querySelector("[name=lastname]");   
    
    console.log(firstName.value, lastName.value);
    if (firstName.value === "" || lastName.value === "") {
        alert("Please fill in all fields");
    } else {
        const ul = document.querySelector(".usersAnswer");
        ul.innerHTML = "";
        const firstLi = document.createElement("li");
        const secondLi = document.createElement("li");
        firstLi.innerText = firstName.value;
        secondLi.innerText = lastName.value;
        ul.appendChild(firstLi);
        ul.appendChild(secondLi);

    }

}
form.addEventListener("submit", logFormInputs);
    //The output should be :

    //<ul class="usersAnswer">
        //<li>first name of the user</li>
        //<li>last name of the user</li>
    //</ul>
