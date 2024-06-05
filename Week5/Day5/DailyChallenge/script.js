const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
const tasks = [];
const ul = document.getElementById("list-tasks");

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const task = formData.get("task");
    if (task === "") return;
    tasks.push(task);
    renderTasks(tasks)
    form.reset();
}

function renderTasks(tasks) {

    ul.innerHTML = "";

    for (const task of tasks) {
        const li = generateLi(task);
        ul.append(li);
    }
    
}

function generateLi(task) {
    const li = document.createElement("li");
    const xMark = document.createElement("i");
    xMark.classList.add("fa-solid", "fa-xmark");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    const span = document.createElement("label");
    span.innerText = task;
    li.append(xMark, checkBox, span);
    return li;
}