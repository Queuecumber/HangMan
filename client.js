var xmpp = require('node-xmpp-client');
var ltx = require('node-xmpp-core').ltx;

var HangManClient = function (settings, auth)
{
    this.connection = new xmpp.Client({
        port: settings.googleTalk.port,
        host: settings.googleTalk.host,
        jid: auth.jid,
        password: auth.password
    });

    this.send = function (recipient, msg)
    {
        var stanza = new ltx.Element(
            'message', {
                to: recipient,
                type: 'chat'
            })
            .c('body').t(msg);

        console.log(stanza);

        this.connection.send(stanza);
    };

    this.connection.on('stanza', function (stanza)
    {
        console.log(JSON.stringify(stanza));
    });

    this.connection.addListener('online', function (data)
    {
        console.log(data);
    });

    this.connection.addListener('error', function (e)
    {
        console.error(e);
        process.exit(1);
    });
};

module.exports = {
    HangManClient: HangManClient
}
