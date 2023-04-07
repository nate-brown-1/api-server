require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';
const sequelize = new Sequelize(SQL_URL);

const Panda = sequelize.define('Panda', {
  name: '',
  limbs: 4,
  mouth: 'fangs',
  color: 'monochrome',
  habitat: 'ocean'
});

module.exports = {
  sequelize,
  Panda,
};
