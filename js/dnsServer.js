function dnsServer() {    

    var {lookup} = require('dns-lookup-cache');
        
    lookup(window.location.host, {family: 4}, function (err, address) {
        
        console.log('RESULT IP', address);

        return address === undefined ? address : console.log('erro', err);
    });

}
module.exports = dnsServer;
