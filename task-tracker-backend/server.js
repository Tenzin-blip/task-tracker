const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.use(cors());
app.use(express.json());
//task array
let tasks = [
  { id: 1, text: "Task 1", completed: false },
  { id: 2, text: "Task 2", completed: false },
  { id: 3, text: "Task 3", completed: false },
];

// //get all tasks
// app.get("/", (req, res) => {
//   //res.json(tasks);
//   res.send("tasks");
// });

//get a task by id
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});