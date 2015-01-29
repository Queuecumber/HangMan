var xmpp = require('node-xmpp-server');
var ltx = require('node-xmpp-core').ltx;

var r = new xmpp.Router();

r.register('hm.queuecumber.net', function (stanza)
{
    var me = stanza.attrs.to;
    stanza.attrs.to = stanza.attrs.from;
    stanza.attrs.from = me;
    r.send(stanza);
});
