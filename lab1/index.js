const http = require('http')
const url = require('url')
const qs = require('querystring')
const handles = require('./lib/handles');

const server = http.createServer(handles.serverHandle);
server.listen(8080);
