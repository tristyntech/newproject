const db = require('../db.js')
const Sequelize = require('sequelize')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

module.exports = User