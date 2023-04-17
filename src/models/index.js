'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const octopusModel = require('./octopus.js');
const pandaModel = require('./panda.js');
const Collection = require('./collection.js');

const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';

const sequelize = new Sequelize(SQL_URL);

const panda = pandaModel(sequelize, DataTypes);
const octopus = octopusModel(sequelize, DataTypes);

panda.hasOne(octopus, { foreignKey: { name: 'pandaId' } });
octopus.belongsTo(panda);

module.exports = {
  sequelize: sequelize,
  octopus: new Collection(octopus),
  panda: new Collection(panda)
};

