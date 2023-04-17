'use strict';

//  express server
const express = require('express');

// cross origin resource sharing
const cors = require('cors');

// import logger module
const logger = require('./middleware/logger');

// import validator module
const validator = require('./middleware/validator');

// error handler modules
const notFoundErrorHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');

// router
const router = require('./routes/router.js');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

// use the middleware
app.use(logger);
app.use(validator);

app.use(router);

// error 404 for bad requests
app.use('*', notFoundErrorHandler);

// last chance, error 500
app.use(serverErrorHandler);

// export server object with app and start
module.exports = {
  server: app,
  start: (port) => app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  })
};
