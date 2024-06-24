//Part I - The List:
//1. In the HTML file, create a form to add a new task. The form should contain a few inputs:
//Name
//Description
//Start date and time - check the documentation
//End date and time - check the documentation
//A submit button
/*Example

    Name : "Buy food for my party"

    Description : "All my friends are invited, 
                   everything needs to be perfect"

    Start date and time : "03/08/2021 14:00:00"

    End date and time : "05/08/2021 21:00:00"

    Done : False*/

//2. As soon as the user submits the form, the task should be saved.
//By default, the status of the task is “uncompleted” (ie. isCompleted: false)
//IMPORTANT : The todo list items should be stored in your localStorage - You should use an array of objects - each object //contains a task
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault(); //This prevents default form submission

    //This retrieves input values from the form
    const task = {
        name: document.getElementById('taskName').value,
        description: document.getElementById('taskDescription').value,
        start: document.getElementById('taskStart').value,
        end: document.getElementById('taskEnd').value,
        isCompleted: false
    };

    //This retrieves tasks from localStorage, adds the new task and saves it back to localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    //This redirects the user to the tasks display page
    window.location.href = 'tasks.html'; // Redirect to the tasks display page
});
//3. As soon as the user submits the form, the new task will be displayed in another HTML page. Every task should be displayed in the following way:

    //1. Name
    //2. Starting date
    //3. How many days left to complete the task.
    //Note:
        //Example: if a task was set yesterday and the end date is in 5 days, then there are 4 days //remaining to complete the task.
        //Example: if a task was set to start tommorow and the end date is in 5 days then there are 6 days remaining to complete the task.




