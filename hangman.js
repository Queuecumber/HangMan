var client = require('./client.js');
var server = require('./server.js');
var fs = require('fs');
var config = require('config');

var auth = JSON.parse(fs.readFileSync('my.json'));

var c = new client.HangManClient(config.client, auth);
var s = new server.HangManServer(config.server);

s.on('message', function (stanza)
{
    var to = stanza.attrs.to;

    var rparts = to.split('@');

    var recipient = rparts[0] + '@gmail.com';

    stanza.attrs.to = recipient;

    c.send(stanza);
});
