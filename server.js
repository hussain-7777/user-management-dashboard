const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Configure CORS with specific options
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3002'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// In-memory storage for users (replace with a database in production)
let users = [];
let nextId = 1;

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a single user
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
  const { firstName, lastName, email, department } = req.body;
  const newUser = {
    id: nextId++,
    firstName,
    lastName,
    email,
    department
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user
app.put('/users/:id', (req, res) => {
  const { firstName, lastName, email, department } = req.body;
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[userIndex] = {
    ...users[userIndex],
    firstName,
    lastName,
    email,
    department
  };

  res.json(users[userIndex]);
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const deletedUser = users[userIndex];
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json(deletedUser);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
