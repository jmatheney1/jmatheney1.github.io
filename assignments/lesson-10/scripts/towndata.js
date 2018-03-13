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
    // 2nd town
    document.getElementById('t_1_name').innerHTML = townData.towns["1"].name;
    document.getElementById('t_1_moto').innerHTML =  townData.towns["1"].motto;
    document.getElementById('t_1_yearFounded').innerHTML = townData.towns["1"].yearFounded;
    document.getElementById('t_1_population').innerHTML = townData.towns["1"].currentPopulation;
    document.getElementById('t_1_annualRainfall').innerHTML = townData.towns["1"].averageRainfall;
    // 3rd town 
    document.getElementById('t_3_name').innerHTML = townData.towns["3"].name;
    document.getElementById('t_3_moto').innerHTML =  townData.towns["3"].motto;
    document.getElementById('t_3_yearFounded').innerHTML = townData.towns["3"].yearFounded;
    document.getElementById('t_3_population').innerHTML = townData.towns["3"].currentPopulation;
    document.getElementById('t_3_annualRainfall').innerHTML = townData.towns["3"].averageRainfall;
    
    
    
}; //        <p><span id="t_0_name">City, State</span>, MN</p>