var client = require('./client.js');
var server = require('./server.js');
var fs = require('fs');
var config = require('config');

var auth = JSON.parse(fs.readFileSync('my.json'));

var c = new client.HangManClient(config.client, auth);
var s = new server.HangManServer(config.server);
