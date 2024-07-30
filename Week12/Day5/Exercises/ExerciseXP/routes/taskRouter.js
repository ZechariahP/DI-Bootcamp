/* Implement the following routes using express.Router:

GET /tasks: Retrieve a list of all tasks from a JSON file.
GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
POST /tasks: Create a new task and store it in the JSON file.
PUT /tasks/:id: Update a task by ID in the JSON file.
DELETE /tasks/:id: Delete a task by ID from the JSON file. */

const express = require('express');
const taskController = require('../controllers/taskController.js');

const router = express.Router();

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTask);
router.post('/tasks', taskController.saveTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;