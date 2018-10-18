module.exports = function(hostname) {    
    var dns = require('dns');
    
    dns.lookup(hostname, function(err, result) {
        console.log('RESULT IP', result);
        return result;
    });
};