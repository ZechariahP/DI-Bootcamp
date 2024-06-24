document.addEventListener('DOMContentLoaded', function() {
    //This retrieves tasks from localStorage and displays them in the tasks display page
    const tasksContainer = document.getElementById('tasksContainer');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    //Sort tasks by start date
    tasks.sort((a, b) => new Date(a.start) - new Date(b.start)); // Sort tasks by start date

    //Display tasks in the tasks display page
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p>Start: ${new Date(task.start).toLocaleString()}</p>
            <p>Days left: ${calculateDaysLeft(task.end)}</p>
            <button onclick="toggleDescription('${task.name}')">Details</button>
            <input type="checkbox" ${task.isCompleted ? 'checked' : ''} onchange="updateStatus('${task.name}', this.checked)">
            <button onclick="deleteTask('${task.name}')">X</button>
            <button onclick="editTask('${task.name}')">Edit</button>
            <p style="display: none;">${task.description}</p>
        `;

        //Change the color of the task based on its completion status
        taskElement.style.color = task.isCompleted ? 'green' : calculateDaysLeft(task.end) < 0 ? 'red' : 'black';
        //Add the task to the tasks display page
        tasksContainer.appendChild(taskElement);
    });
});

//This function calculates the number of days left to complete a task
function calculateDaysLeft(endDate) {
    const today = new Date();
    const end = new Date(endDate);
    const difference = end - today;
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

//This function toggles the visibility of the task's description
function toggleDescription(taskName) {
    const tasks = document.querySelectorAll('#tasksContainer div');
    tasks.forEach(task => {
        if (task.querySelector('h3').textContent === taskName) {
            task.querySelector('p:last-of-type').style.display = task.querySelector('p:last-of-type').style.display === 'none' ? 'block' : 'none';
        }
    });
}

//This function updates the task's completion status
function updateStatus(taskName, isCompleted) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(task => task.name === taskName);
    task.isCompleted = isCompleted; 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.href = 'tasks.html'; // Redirect to the tasks display page
}

//This function deletes a task
function deleteTask(taskName) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTasks = tasks.filter(task => task.name !== taskName);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    window.location.href = 'tasks.html'; // Redirect to the tasks display page
}

//This function edits a task's details
function editTask(taskName) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(task => task.name === taskName);
    const newName = prompt('Enter new task name:', task.name);
    const newDescription = prompt('Enter new task description:', task.description);
    const newStart = prompt('Enter new start date:', task.start);
    const newEnd = prompt('Enter new end date:', task.end);

    task.name = newName;
    task.description = newDescription;
    task.start = newStart;
    task.end = newEnd;

    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.href = 'tasks.html'; // Redirect to the tasks display page
}

