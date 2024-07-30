const fs = require("fs");

module.exports = {
  readJsonTasks: () => {
    try {
      const jsonTasks = fs.readFileSync("tasks.json", "utf-8");
      return JSON.parse(jsonTasks) || [];
    } catch (error) {
      console.log(error);
    }
  },
  writeJsonTasks: (tasksArray) => {
    fs.writeFile("tasks.json", JSON.stringify(tasksArray), "utf-8", (err) => {
      if (err) return console.log(err);
      console.log("tasks saved");
    });
  },
  deleteJsonTasks: (tasksArray) => {
    fs.writeFile("tasks.json", JSON.stringify(tasksArray), "utf-8", (err) => {
      if (err) return console.log(err);
      console.log("tasks deleted");
    });
  },
  updateJsonTasks: (tasksArray) => {
    fs.writeFile("tasks.json", JSON.stringify(tasksArray), "utf-8", (err) => {
      if (err) return console.log(err);
      console.log("tasks updated");
    });
  }
};