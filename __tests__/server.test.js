'use strict';

const sequelize = require('../src/models/index.js');
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const seed = require('../seed');
const Panda = require('../src/models/panda.js');

beforeAll(async () => {
  // await seed();
  await sequelize.sync().then();

  // let testOctopus = await Octopuses.create({
  //   name: 'Test',
  //   likes_clams: true,
  //   number_of_arms: 8
  // });

  let aga = await Panda.create({
    name: 'Agnieszka',
    age: 32,
    birthday: '1991-02-03'
  });

  console.log('you created ' + aga);

});

afterAll(async () => {
  await sequelize.drop();
});

describe('Test error handlers', () => {

  test('Should return 404 on bad route', async () => {
    const response = await request.get('/monkey');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });

  test('Should return 404 on bad method', async () => {
    const response = await request.patch('/panda');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });

});

describe('Test GET routes', () => {

  test('Should get all pandas', async () => {
    const response = await request.get('/panda');
    console.log(response);
    // expect(response.status).toEqual(200);
    // expect(response.body).toEqual( { all pandas } );
  });

  xtest('Should get one panda', async () => {
    const response = await request.get('/panda:');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual( { requested panda } );
  });

});

describe('Test POST routes', () => {

  xtest('Should create new panda', async () => {
    const response = await request.post('/panda');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual();
  });

});

describe('Test PUT routes', () => {

  xtest('Should update panda', async () => {
    const response = await request.put('/panda:');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual();
  });

});

describe('Test DELETE routes', () => {

  xtest('Should delete one panda', async () => {
    const response = await request.delete('/panda:');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual();
  });

});
