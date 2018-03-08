
	var temp = (90 + 66) / 2;
	var windSpeed = 5;
	var result = calc(temp, windSpeed);
	var output = Math.round(result * 100) / 100;
	
    document.getElementById('chill').innerHTML = output;


function calc(t, s) {
	return (35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * t * (Math.pow(s, 0.16))));
}