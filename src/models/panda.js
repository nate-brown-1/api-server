'use strict';

const pandaModel = (sequelize, DataTypes) => sequelize.define('panda', {
  name: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  birthday: { type: DataTypes.STRING },
});

module.exports = pandaModel;
