var revertDns = require('./revertDns.js');
var getIp = require('./getIp.js');

getIp(revertDns(document.location.host));

console.log('Ip dns', revertDns(hostname));

