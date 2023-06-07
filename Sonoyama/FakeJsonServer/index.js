const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Add this line

let selections = [
  {
    name: 'Your Selection Name',
    todoTask: [
      {
        name: 'Your Option Name',
        description: 'Your Option Description',
        tags: ['#tag1', '#tag2', '#tag3']
      }
    ]
  }
];

// Get all selections
app.get('/selections', (req, res) => {
  res.json(selections);
});

// Get a specific selection by its index
app.get('/selections/:index', (req, res) => {
  const index = req.params.index;
  const selection = selections[index];

  if (!selection) {
    res.status(404).json({ error: 'Selection not found' });
  } else {
    res.json(selection);
  }
});

// Create a new selection
app.post('/selections', (req, res) => {
  const newSelection = req.body;
  selections.push(newSelection);
  res.status(201).json(newSelection);
});

// Update an existing selection
app.put('/selections/:index', (req, res) => {
  const index = req.params.index;
  const updatedSelection = req.body;

  if (!selections[index]) {
    res.status(404).json({ error: 'Selection not found' });
  } else {
    selections[index] = updatedSelection;
    res.json(updatedSelection);
  }
});

// Delete a selection
app.delete('/selections/:index', (req, res) => {
  const index = req.params.index;

  if (!selections[index]) {
    res.status(404).json({ error: 'Selection not found' });
  } else {
    const deletedSelection = selections.splice(index, 1);
    res.json(deletedSelection[0]);
  }
});

// Get all todos for a selection
app.get('/selections/:index/todos', (req, res) => {
  const index = req.params.index;
  const selection = selections[index];

  if (!selection) {
    res.status(404).json({ error: 'Selection not found' });
  } else {
    res.json(selection.todoTask);
  }
});

// Get a specific todo by its index within a selection
app.get('/selections/:index/todos/:todoIndex', (req, res) => {
  const index = req.params.index;
  const todoIndex = req.params.todoIndex;
  const selection = selections[index];

  if (!selection || !selection.todoTask[todoIndex]) {
    res.status(404).json({ error: 'Todo not found' });
  } else {
    res.json(selection.todoTask[todoIndex]);
  }
});

// Create a new todo within a selection
app.post('/selections/:index/todos', (req, res) => {
  const index = req.params.index;
  const newTodo = req.body;
  const selection = selections[index];

  if (!selection) {
    res.status(404).json({ error: 'Selection not found' });
  } else {
    selection.todoTask.push(newTodo);
    res.status(201).json(newTodo);
  }
});

// Update an existing todo within a selection
app.put('/selections/:index/todos/:todoIndex', (req, res) => {
  const index = req.params.index;
  const todoIndex = req.params.todoIndex;
  const updatedTodo = req.body;
  const selection = selections[index];

  if (!selection || !selection.todoTask[todoIndex]) {
    res.status(404).json({ error: 'Todo not found' });
  } else {
    selection.todoTask[todoIndex] = updatedTodo;
    res.json(updatedTodo);
  }
});

// Delete a todo within a selection
app.delete('/selections/:index/todos/:todoIndex', (req, res) => {
  const index = req.params.index;
  const todoIndex = req.params.todoIndex;
  const selection = selections[index];

  if (!selection || !selection.todoTask[todoIndex]) {
    res.status(404).json({ error: 'Todo not found' });
  } else {
    const deletedTodo = selection.todoTask.splice(todoIndex, 1);
    res.json(deletedTodo[0]);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

