const tasksModel = require("../models/taskModel.js");

module.exports = {
  getAllTasks: (req, res) => {
    const tasks = tasksModel.readJsonTasks();
    res.json(tasks);
  },
    getTask: (req, res) => {
        const tasks = tasksModel.readJsonTasks();
        const task = tasks.find((task) => task.id === parseInt(req.params.id));
        res.json(task);
    },
  saveTask: (req, res) => {
    const tasks = tasksModel.readJsonTasks();
    tasks.push(req.body);
    tasksModel.writeJsonTasks(tasks);
    res.sendStatus(201);
  },
  updateTask: (req, res) => {
    const tasks = tasksModel.readJsonTasks();
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(req.params.id));
    tasks[taskIndex] = req.body;
    tasksModel.writeJsonTasks(tasks);
    res.sendStatus(200);
    },
    deleteTask: (req, res) => {
      const tasks = tasksModel.readJsonTasks();
      const taskIndex = tasks.findIndex((task) => task.id === parseInt(req.params.id));
      tasks.splice(taskIndex, 1);
      tasksModel.writeJsonTasks(tasks);
      res.sendStatus(200);
    }

};