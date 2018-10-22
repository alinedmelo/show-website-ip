var dnsServer = require('./dnsServer.js');
var getIp = require('./getIp.js');

var getdns = dnsServer();

getIp(getdns);
