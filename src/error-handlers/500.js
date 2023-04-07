'use strict';

function serverErrorHandler (error, request, response, next) {
  // error handler goes here
  console.error;
  response.status(500).send('Internal server error!');
}

module.exports = serverErrorHandler;
