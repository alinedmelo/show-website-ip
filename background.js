var xmlhttp = new XMLHttpRequest();

xmlhttp.open('GET', 'https://jsonip.com', true);

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            var ip = obj.ip;
            
            console.log('Show Website IP - Hostname: ', document.location.host);

            var showIp = document.createElement('span');
            showIp.classList.add('show-ip');
            showIp.innerHTML = ip;

            document.body.appendChild(showIp);
         }
    }
};
xmlhttp.send(null);