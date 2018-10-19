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
