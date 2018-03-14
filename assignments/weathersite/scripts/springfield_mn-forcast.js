var weatherObject2 = new XMLHttpRequest();

weatherObject2.open('GET', 'https://api.wunderground.com/api/343d8105ba55767e/forecast/q/MN/springfield.json', true  );
weatherObject2.send();

weatherObject2.onload = function () {
    
    var weatherForcast = JSON.parse(weatherObject2.responseText);
    console.log(weatherForcast); 
    
    document.getElementById('fcttext').innerHTML = weatherForcast.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('fc_icon').src = weatherForcast.forecast.txt_forecast.forecastday["0"].icon_url.replace("http", "https"); 
};