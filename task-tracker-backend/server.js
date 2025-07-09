const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
app.use(express.json());
const PORT = 5000;
const users = require('./users.js');
const JWT_SECRET = 'mysecretkey123';

app.use(cors());
app.use(express.json());
//task array
let tasks = [
  { id: 1, text: "Task 1", completed: false },
  { id: 2, text: "Task 2", completed: false },
  { id: 3, text: "Task 3", completed: false },
];
//api call 
app.get("/", (req, res) => {
  res.send("Task Tracker API");
});
//health check path to check if the server is running
app.get("/health", (req, res) => {
  res.send("Hello Word");
});

//get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.post('/api/auth/login', authenticateJWT, (req,res) =>{
  const {email,password} = req.body;
  const user = users.find((u) => u.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)){
    return res.status(401).json({message: 'Wrong email or password'});
  }

  const token = jwt.sign({id: user.id, role:user.role}, JWT_SECRET, {
    expiresIn:'15m',
  });

  res.json({token,message: 'Login successful'});
});

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Please log in' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}
