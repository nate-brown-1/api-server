'use strict';

const logger = require('./validator');

describe('Test validator middleware', () => {
  test('Should test if request includes name', () => {
    const request = {
      body: {
        name: 'Aga'
      }
    };
    const response = {};
    const next = jest.fn();

    logger(request, response, next);
    expect(request.body.name).toEqual('Aga');
  });
});
