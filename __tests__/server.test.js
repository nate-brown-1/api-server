'use strict';

const { sequelize, octopus, panda } = require('../src/models/index.js');
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);
const { response } = require('express');

beforeAll(async () => {
  await sequelize.sync().then();

  let testOctopus = await octopus.create({
    name: 'Test',
    likes_clams: true,
    number_of_arms: 8
  });

  let testPanda = await panda.create({
    name: 'Agnieszka',
    age: 32,
    birthday: '1991-02-03'
  });

  console.log('you created ' + testOctopus + ' and ' + testPanda);

});

afterAll(async () => {
  await sequelize.drop();
});

describe('test bad routes', () => {

  test('should return 404 on bad route', async () => {
    const response = await request.get('/squid');
    // console.log(response);
    expect(response.status).toEqual(404);
  });

  test('should return 404 on bad method', async () => {
    const response = await request.patch('/panda');
    // console.log(response);
    expect(response.status).toEqual(404);
  });

});

describe('Test GET routes', () => {

  test('Should get all octopuses', async () => {
    const allOctopuses = await panda.read();
    expect(allOctopuses.length > 0);
  });

  test('Should get one panda', async () => {
    const id = 1;
    const selOctopus = await octopus.read(id);
    expect(selOctopus.id).toEqual(1);
  });

  test('Should get all pandas', async () => {
    const allPandas = await panda.read();
    expect(allPandas.length > 0);
  });

  test('Should get one panda', async () => {
    const id = 1;
    const selPanda = await panda.read(id);
    expect(selPanda.id).toEqual(1);
  });

});

describe('Test POST routes', () => {

  test('octopus should be created', async () => {

    let newOctopus = await octopus.create({
      name: 'Dad',
      likes_clams: true,
      number_of_arms: 2
    });
    expect(newOctopus.name).toEqual('Dad');
    expect(newOctopus.likes_clams).toBeTruthy();
  });

  test('panda should be created', async () => {

    let newPanda = await panda.create({
      name: 'Nate',
      age: 40,
      birthday: '1983-01-25'
    });
    expect(newPanda.name).toEqual('Nate');
    expect(newPanda.age).toEqual(40);
  });

});

describe('Test PUT routes', () => {

  test('can update panda', async () => {
    const id = 1;
    let updatedPanda = {
      name: 'Aga',
      age: 33,
      birthday: '1991-02-03'
    };
    const updPanda = await panda.update(id, updatedPanda);
    expect(updPanda).toEqual([1]);
    const pandaAfterUpdate = await panda.read(id);
    expect(pandaAfterUpdate.name).toEqual('Aga');
  });

  test('can update octopus', async () => {
    const id = 1;
    let updatedOctopus = {
      name: 'Nathan',
      likes_clams: false,
      number_of_arms: 7
    };
    const updOctopus = await octopus.update(id, updatedOctopus);
    expect(updOctopus).toEqual([1]);
    const octopusAfterUpdate = await octopus.read(id);
    expect(octopusAfterUpdate.name).toEqual('Nathan');
  });

});


describe('Test DELETE routes', () => {

  test('can delete octopus', async () => {
    const id = 2;
    let deletedOctopus = await octopus.delete(id);
    expect(deletedOctopus).toEqual(1);
  });

  test('can delete panda', async () => {
    const id = 2;
    let deletedPanda = await panda.delete(id);
    expect(deletedPanda).toEqual(1);
  });

});
