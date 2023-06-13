"use strict";
//This function rounds numbers to a specific percision
function round(value, precision) {
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}
//This function turns WGS84 coordinates and scrambles them. wgsLat is the latitude and wgsLng is the longitude.
function wgs2sd(wgsLat, wgsLng, deltaMultiplier = 1, precision=3) {
	//Use sine and cosine to claculate the initial deltas for lat/lng
	let dlat = Math.sin(wgsLat);
	for(let i = 0; i < 7; i++){
		dlat = Math.sin(dlat);
	}
	let dlng = Math.cos(wgsLng);
	for(let j = 0; j < 7; j++){
		dlat = Math.cos(dlng);
	}
	//Multiply by the multiplier
	dlat = dlat*deltaMultiplier;
	dlng = dlng*deltaMultiplier;
	//Add the latitude/longitude to their respective deltas
	//Then round the new values as finely as the user would like
	return { "lat": round(wgsLat + dlat, precision), "lng": round(wgsLng + dlng, precision) };
}
console.log(wgs2sd(12.345, 67.890));//Test
module.exports.wgs2sd = wgs2sd;//Export the function