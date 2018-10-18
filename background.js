var revertDns = require('./revertDns.js');
var getIp = require('./getIp.js');

console.log('Ip', document.location.host);

getIp(revertDns(document.location.host));
