'use strict';

const pandaModel = (sequelize, DataTypes) => sequelize.define('panda', {
  name: { type: DataTypes.STRING, required: true },
  age: { type: DataTypes.INTEGER, required: true },
  birthday: { type: DataTypes.STRING, required: true },
});

module.exports = pandaModel;
