'use strict';

// allow environmental variables
require('dotenv').config();
// get envs here to prevent Render deployment errors
const port = process.env.PORT;

const server = require('./src/server');

const { sequelize } = require('./src/models/index.js');

sequelize.sync().then(() => {
  server.start(port);
});
