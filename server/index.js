'use strict';
const app = require('./app');
const db = require('../db');
const PORT = process.env.port || 80 || 3000;
const HOST = process.env.host || '138.68.42.88' || localhost;

app.listen(PORT, HOST);
console.log('Server running at http://${host}:${port}/');
