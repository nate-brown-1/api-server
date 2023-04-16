'use strict';

const sequelize = require('./src/models/index');
const Octopus = require('./src/models/octopus');
const Panda = require('./src/models/panda');

async function seed() {

  await sequelize.sync().then(async () => {

    let seedOctopus = await Octopus.create({
      name: 'Jack',
      likes_clams: true,
      number_of_arms: 8
    });

    let seedPanda = await Panda.create({
      name: 'Agnieszka',
      age: 32,
      birthday: '1991-02-03'
    });

  }).catch(error => console.error(error));

}

module.exports = seed;
