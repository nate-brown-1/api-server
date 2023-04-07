'use strict';

// allow environmental variables
require('dotenv').config();
// get envs here to prevent Render deployment errors
const port = process.env.PORT;

const app = require('./src/server');

app.start(port);
