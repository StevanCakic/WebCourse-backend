
const express = require('express')
const { json, urlencoded } = require('body-parser')

const connect = require("./helpers").connect;
const Todo = require('./todo_controllers');

const app = express()


app.use(urlencoded({ extended: true }))
app.use(json())

app.get('/todo/:id', async (req, res) => {
  const todoId = req.params.id;
  console.log(req.query)
  const todo = await Todo.findById(todoId);
  console.log(todo);
  res.status(200).json(todo);
})

app.get('/todos', async (req, res) => {
  const todos = await Todo.findAll();
  res.status(200).json(todos)
})

app.post('/todo', async (req, res) => {
  const todoToCreate = req.body.todo;
  console.log(todoToCreate)
  try {
    const todo = await Todo.create(todoToCreate)
    res.status(201).json(todo.toJSON())
  } catch (error) {
    console.log(error);
    res.json(error)
  }

})

connect('mongodb://localhost:27017/intro-to-mongodb')
  .then(() => app.listen(4000, () => {
    console.log('server on http://localhost:4000')
  }))
  .catch(e => console.error(e))
