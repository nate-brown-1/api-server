'use strict';

const octopusModel = (sequelize, DataTypes) => sequelize.define('octopus', {
  name: { type: DataTypes.STRING },
  likes_clams: { type: DataTypes.BOOLEAN },
  number_of_arms: { type : DataTypes.INTEGER }
});

module.exports = octopusModel;
