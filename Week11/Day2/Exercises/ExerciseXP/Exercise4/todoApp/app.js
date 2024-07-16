import { TodoList } from './todo.js';

const todoList = new TodoList();

todoList.addTask('Buy groceries');
todoList.addTask('Do laundry');
todoList.addTask('Clean the house');
todoList.addTask('Walk the dog');
todoList.markTaskComplete('Buy groceries');
todoList.markTaskComplete('Walk the dog');
todoList.listTasks();

/*PS C:\Users\Zachary\Desktop\DI-Bootcamp\Week11\Day2\Exercises\ExerciseXP\Exercise4\todoApp> node app.js
Tasks:
[x] Buy groceries
[ ] Do laundry
[ ] Clean the house
[x] Walk the dog*/