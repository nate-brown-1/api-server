'use strict';

function notFoundErrorHandler (error, request, response, next) {
  // error handler goes here
  console.error;
  response.status(404).send('Resource not found!');
}

module.exports = notFoundErrorHandler;
