// JavaScript Document

var townObject = new XMLHttpRequest();

townObject.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true  );

townObject.send();

townObject.onload = function () {
    
    var townData = JSON.parse(townObject.responseText);
    console.log(townData);
    //1st town
    document.getElementById('t_0_name').innerHTML = townData.towns["0"].name;
    document.getElementById('t_0_moto').innerHTML =  townData.towns["0"].motto;
    document.getElementById('t_0_yearFounded').innerHTML = townData.towns["0"].yearFounded;
    document.getElementById('t_0_population').innerHTML = townData.towns["0"].currentPopulation;
    document.getElementById('t_0_annualRainfall').innerHTML = townData.towns["0"].averageRainfall;
    document.getElementById('t_0_event1').innerHTML = townData.towns["0"].events["0"];
    document.getElementById('t_0_event2').innerHTML = townData.towns["0"].events['1'];
    document.getElementById('t_0_event3').innerHTML = townData.towns["0"].events['2'];
    
}; //        <p><span id="t_0_name">City, State</span>, MN</p>