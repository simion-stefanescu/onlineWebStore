const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'aaaaaa', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
