"use strict";
//This function rounds numbers to a specific percision
function round(value, precision) {
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}
//This function turns WGS84 coordinates and scrambles them. wgsLat is the latitude and wgsLng is the longitude.
function wgs2sd(wgsLat, wgsLng) {
	var dlat = Math.sin(Math.sin(Math.sin(Math.sin(Math.sin(Math.sin(Math.sin(Math.sin(wgsLat))))))));//Calculate the delta for the latitude
	var dlng = Math.cos(Math.cos(Math.cos(Math.cos(Math.cos(Math.cos(Math.cos(Math.cos(wgsLng))))))));//Calculate the delta for the longitude
	return { "lat": round(wgsLat + dlat, 3), "lng": round(wgsLng + dlng, 3) };//Add the latitude/longitude to their respective deltas. Then round the new values to the 1000ths place
}
module.exports.wgs2sd = wgs2sd;//Export the function
