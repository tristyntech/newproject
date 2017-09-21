const Sequelize = require('sequelize')

const sequelize = new Sequelize('todoapp', 'caleb', 'caleb', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: '/Users/calebanderson/Desktop/tristynDemo/db/todoapp.sqlite'
});


module.exports = sequelize;
