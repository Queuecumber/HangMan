var xmpp = require('node-xmpp-client');
var ltx = require('node-xmpp-core').ltx;

var HangManClient = function (settings, auth)
{
    this.talkId = settings.talkId;
    this.connection = new xmpp.Client({
        port: settings.googleTalk.port,
        host: settings.googleTalk.host,
        jid: auth.jid,
        password: auth.password
    });

    this.send = function (to, msg)
    {
        var stanza = new ltx.Element(
            'message', {
                to: to,
                type: 'chat'
            })
            .c('body').t(msg);

        this.connection.send(stanza);
    };
};

// cl.addListener('online', function (data)
// {
//     console.log(data);
//
//     cl.end();
//
//     console.log('done');
// });

//
// cl.addListener('error', function (e)
// {
//     console.error(e);
//     process.exit(1);
// });

module.exports = {
    HangManClient: HangManClient
}
