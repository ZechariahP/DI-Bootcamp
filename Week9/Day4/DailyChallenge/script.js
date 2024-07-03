//1. Create a form with two fields (name, last name) and a submit button.
//2. When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
document.querySelector("form").addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault(e);
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("last-name").value;
  const div = document.createElement("div");
  div.textContent = JSON.stringify({ name, lastname });
  document.body.appendChild(div);
}
//The output should be:
