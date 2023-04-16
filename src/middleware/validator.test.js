'use strict';

const validator = require('./validator');

describe('Test validator middleware', () => {
  test('Should test if request includes name', () => {
    const request = {
      body: {
        name: 'Aga'
      }
    };
    const response = {};
    const next = jest.fn();

    validator(request, response, next);
    expect(request.body.name).toEqual('Aga');
  });
});
