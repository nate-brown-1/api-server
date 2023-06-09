'use strict';

//  express server
const express = require('express');
const app = express();

// cross origin resource sharing
const cors = require('cors');
app.use(cors());

// import logger module
const logger = require('./middleware/logger');
app.use(logger);

// import validator module
const validator = require('./middleware/validator');
app.use(validator);

// error handler modules
const notFoundErrorHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

// router
const router = require('./routes/router.js');
app.use(router);

// error 404 for bad requests
app.use('*', notFoundErrorHandler);

// last chance, error 500
app.use(serverErrorHandler);

// export server object with app and start
module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  })
};
