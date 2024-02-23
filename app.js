const http = require('http');
const express = require('express');
const route = require('./routes');
 
const app = express();

app.use(route);

const server = http.createServer(app)
server.listen(4000);