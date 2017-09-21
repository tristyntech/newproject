const express = require('express')
const app = express()
const UserModel = require('./models/UserModel')
const TodoModel = require('./models/TodoModel')
const bodyParser = require('body-parser')

// CRUD Operations
  // C - Create
  // R - Retrieve
  // U - Update
  // D - Delete

console.log('This is user model ', TodoModel)
app.use(bodyParser.json())

app.get('/todos', function(req, res) {
  TodoModel
    .findAll()
    .then((todos) => {
      console.log('todos from db ', todos)
      res.send(JSON.stringify(todos))
    })
})

app.post('/todos', function(req, res) {
  console.log('this is our request body: ', req.body)
  TodoModel.create({ text: req.body.text, completed: req.body.completed })
    .then((report) => {
      res.send('Todo added! :)')
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

app.put('/todos/:id', function(req, res) {
  console.log('this is our request body: ', req.body)
  var query = { where: { id: req.params.id } }
  
  var updatedTodo = {
    text: req.body.text,
    completed: req.body.completed
  }

  TodoModel.update(updatedTodo, query)
    .then((report) => {
      console.log(report)
      res.send('Todo updated! :)')
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})