var weatherObject3 = new XMLHttpRequest();
weatherObject3.open('GET', 'https://api.wunderground.com/api/343d8105ba55767e/forecast10day/q/MN/Franklin.json', true  );

weatherObject3.send();

weatherObject3.onload = function () {
    
    var forcastTen = JSON.parse(weatherObject3.responseText);
    console.log(forcastTen); 
    
    document.getElementById('0_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('1_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["1"].high.fahrenheit;   
    document.getElementById('2_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["2"].high.fahrenheit;   
    document.getElementById('3_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["3"].high.fahrenheit;   
    document.getElementById('4_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["4"].high.fahrenheit;   
    document.getElementById('5_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["5"].high.fahrenheit;   
    document.getElementById('6_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["6"].high.fahrenheit;   
    document.getElementById('7_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["7"].high.fahrenheit;   
    document.getElementById('8_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["8"].high.fahrenheit;
    document.getElementById('9_high').innerHTML = forcastTen.forecast.simpleforecast.forecastday["9"].high.fahrenheit;  
    //

    document.getElementById('0_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('1_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["1"].low.fahrenheit;
    document.getElementById('2_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["2"].low.fahrenheit;   
    document.getElementById('3_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["3"].low.fahrenheit;
    document.getElementById('4_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["4"].low.fahrenheit;
    document.getElementById('5_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["5"].low.fahrenheit;
    document.getElementById('6_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["6"].low.fahrenheit;   
    document.getElementById('7_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["7"].low.fahrenheit;
    document.getElementById('8_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["8"].low.fahrenheit;
    document.getElementById('9_low').innerHTML = forcastTen.forecast.simpleforecast.forecastday["9"].low.fahrenheit;
  
};