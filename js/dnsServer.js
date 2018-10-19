function dnsServer(hostname) {    

    var dns = require('dns');

    dns.lookup(hostname, function(err, result){
        console.log('RESULT IP', result);
        return result;
    });
}
module.exports = dnsServer;