// JavaScript Document

var weatherObject= new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/343d8105ba55767e/conditions/q/CA/San_Francisco.json', true );

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.disp_location.full;
    
}  // end of onload