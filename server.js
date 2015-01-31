var xmpp = require('node-xmpp-server');
var ltx = require('node-xmpp-core').ltx;
var events = require('events');

var HangManServer = function (settings)
{
    var r = new xmpp.Router();
    var emitter = new events.EventEmitter();

    r.register(settings.domain, function (stanza)
    {
        emitter.emit('message',stanza);
    });

    this.on = function ()
    {
        emitter.on.apply(emitter, arguments);
    };

    this.once = function ()
    {
        emitter.once.apply(emitter, arguments);
    };

    this.removeListener = function ()
    {
        emitter.removeListener.apply(emitter, arguments);
    };
};

module.exports = {
    HangManServer: HangManServer
}
