'use strict';


// require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
// const { DataTypes } = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';
// const sequelize = new Sequelize(SQL_URL);

const sequelize = require('./index');

const Panda = sequelize.define('Panda', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

// module.exports = {
//   sequelize,
//   Panda,
// };

module.exports = Panda;
