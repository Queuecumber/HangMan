var xmpp = require('node-xmpp-client');
var ltx = require('node-xmpp-core').ltx;

var HangManClient = function (settings)
{
    this.target = settings.target;
    this.talkId = settings.talkId;
    this.connection = new xmpp.Client({
        port: 5222,
        host: 'talk.google.com',
        jid: settings.talkId,
        password: settings.talkPassword
    });
};

// cl.addListener('online', function (data)
// {
//     console.log(data);
//
//     var stanza = new ltx.Element(
//         'message', {
//             to: '',
//             type: 'chat'
//     })
//     .c('body').t('Hello World');
//
//     cl.send(stanza);
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
    establish: function (settings)
    {
        return new HangManClient(settings);
    }
}
