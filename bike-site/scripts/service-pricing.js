// JavaScript Document document.getElementById('t_0_moto').innerHTML = document.getElementById('t_0_name').innerHTML =


function load() {
    
    var serviceData = JSON.parse(mydata);
     alert(serviceData[0].id);
     alert(serviceData[0].price);

};