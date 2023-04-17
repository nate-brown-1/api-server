'use strict';

// allow environmental variables
require('dotenv').config();
// get envs here to prevent Render deployment errors
const port = process.env.PORT;

const app = require('./src/server.js');

const { sequelize, octopus, panda } = require('./src/models/index.js');

sequelize.sync().then(() => {

  let seedOctopus = octopus.create({
    name: 'Jack',
    likes_clams: true,
    number_of_arms: 8
  });

  let seedPanda = panda.create({
    name: 'Agnieszka',
    age: 32,
    birthday: '1991-02-03'
  });


  app.start(port || 3001);
});
