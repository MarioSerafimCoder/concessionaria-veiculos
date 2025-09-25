const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('concessionaria', 'root', 'col123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;