'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const octopusModel = require('./octopus.js');
const pandaModel = require('./panda.js');
const Collection = require('./collection.js');

const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';

const sequelize = new Sequelize(SQL_URL);
const octopus = octopusModel(sequelize, DataTypes);
const panda = pandaModel(sequelize, DataTypes);


module.exports = {
  sequelize: sequelize,
  octopus: new Collection(octopus),
  panda: new Collection(panda)
};

