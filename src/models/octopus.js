'use strict';

const octopusModel = (sequelize, DataTypes) => sequelize.define('octopus', {
  name: { type: DataTypes.STRING, required: true },
  likes_clams: { type: DataTypes.BOOLEAN, required: true },
  number_of_arms: { type : DataTypes.INTEGER }
});

module.exports = octopusModel;
