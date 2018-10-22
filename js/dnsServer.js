function dnsServer() {    

    var {lookup} = require('dns-lookup-cache');
        
    lookup('alinedias.net', {family: 4}, function (err, address) {
        console.log('erro', err);
        console.log('RESULT IP', address);
        return address;
    });
}
module.exports = dnsServer;

dnsServer();