require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
// const { DataTypes } = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';
// const sequelize = new Sequelize(SQL_URL);

const sequelize = require('./index');

const Octopus = sequelize.define('Octopus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  likes_clams: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  number_of_arms: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// module.exports = {
//   sequelize,
//   Octopus,
// };

module.exports = Octopus;
