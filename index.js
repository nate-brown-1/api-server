'use strict';

// allow environmental variables
require('dotenv').config();
// get envs here to prevent Render deployment errors
const port = process.env.PORT;

const server = require('./src/server');

server.start(port);
