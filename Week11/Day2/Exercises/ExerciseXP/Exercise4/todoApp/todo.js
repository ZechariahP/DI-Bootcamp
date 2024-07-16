export class TodoList {
    constructor() {
        this.tasks = [];
    }
    
    addTask(task) {
        this.tasks.push({ task, complete: false });
    }
    
    markTaskComplete(task) {
        const taskIndex = this.tasks.findIndex((t) => t.task === task);
        if (taskIndex !== -1) {
        this.tasks[taskIndex].complete = true;
        }
    }
    
    listTasks() {
        console.log('Tasks:');
        this.tasks.forEach((t) => {
        console.log(`${t.complete ? '[x]' : '[ ]'} ${t.task}`);
        });
    }
}

