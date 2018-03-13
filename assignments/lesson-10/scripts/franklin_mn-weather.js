// JavaScript Document

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/343d8105ba55767e/conditions/q/MN/Franklin.json', true  );

weatherObject.send();

weatherObject.onload = function () {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML =  weatherInfo.current_observation.display_location.full;
    document.getElementById('temp_f').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('wind_mph').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('windchill_f').innerHTML = weatherInfo.current_observation.windchill_f
    
    
    
}; // end of onload --- document.getElementById('').innerHTML = weatherInfo;