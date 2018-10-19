(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var dnsServer = require('./dnsServer.js');
var getIp = require('./getIp.js');

console.log('IP', document.location.host);

getIp(dnsServer(document.location.host));

},{"./dnsServer.js":2,"./getIp.js":3}],2:[function(require,module,exports){
function dnsServer(hostname) {    

    var dns = require('dns');

    dns.lookup(hostname, function(err, result){
        console.log('RESULT IP', result);
        return result;
    });
}
module.exports = dnsServer;
},{"dns":4}],3:[function(require,module,exports){
function getIp(ip) {

    var showIp = document.createElement('div');
    showIp.classList.add('show-ip');
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open('GET', 'https://extreme-ip-lookup.com/json/' + ip, true);
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200) {
                var obj = JSON.parse(xmlhttp.responseText);
                var ip = obj.query;
    
                console.log('>>>>', obj);
                
                console.log('[Show Website IP] Hostname: ', document.location.host);
                
                showIp.innerHTML = ip;
    
                document.body.appendChild(showIp);
             }
        }
    };
    
    xmlhttp.send(null);
}

module.exports = getIp;

},{}],4:[function(require,module,exports){

},{}]},{},[1,3,2]);
