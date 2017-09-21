const db = require('../db.js')
const Sequelize = require('sequelize')

const Todo = db.define('todo', {
  text: {
    type: Sequelize.STRING
  },
  completed: {
    type: Sequelize.BOOLEAN
  }
});

Todo.sync().then(() => {
  // Table created
  console.log('todos table created')
});

module.exports = Todo