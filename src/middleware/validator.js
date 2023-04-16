'use strict';

function validator (request, response, next) {
  const name = request.body.name;
  if (!name) {
    console.log('request does not have name');
  } else {
    console.log('request has name');
    next();
  }
}

module.exports = validator;
