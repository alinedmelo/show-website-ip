var dnsServer = require('./dnsServer.js');
var getIp = require('./getIp.js');

console.log('IP', document.location.host);

getIp(dnsServer(document.location.host));
