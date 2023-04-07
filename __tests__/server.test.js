'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

// beforeAll( async () => {
//   await db1.sequelize.sync();
//   await db2.sequelize.sync();
// });

// afterAll( async () => {
//   await db1.sequelize.drop();
//   await db2.sequelize.drop();
// });

describe('Test express server for pandas and octopuses'), () => {

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
  test('Should get all pandas', async () => {
    const response = await request.get('/panda');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual( { all pandas } );
  });
  test('Should get one panda', async () => {
    const response = await request.get('/panda:');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual( { requested panda } );
  });
  test('Should create new panda', async () => {
    const response = await request.post('/panda');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual();
  });
  test('Should update panda', async () => {
    const response = await request.put('/panda:');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual();
  });
  test('Should delete one panda', async () => {
    const response = await request.delete('/panda:');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual();
  });

};
