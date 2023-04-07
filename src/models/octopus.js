require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';
const sequelize = new Sequelize(SQL_URL);

const Octopus = sequelize.define('Octopus', {
  name: '',
  limbs: 8,
  mouth: 'beak',
  color: 'shifting',
  habitat: 'ocean'
});

module.exports = {
  sequelize,
  Octopus,
};
