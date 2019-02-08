// Map
var map = L.map('mapContainer').setView([6.460422, 3.409448], 15);

var options = {
	zoomControl: false,
	scrollWheelZoom: false,
	center: [43, 0],
	zoomControl: true,
	zoom: 3
  };

var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
attribution: 'Drool Spots'}).addTo(map);

var mapopup = document.getElementById("mapopup");

L.marker([6.4582152889416715, 3.399667739868164]).addTo(map).bindPopup(mapopup);
L.marker([6.4582012314416715, 3.403963739868164]).addTo(map).bindPopup(mapopup);
L.marker([6.4584562082416715, 3.374946739868164]).addTo(map).bindPopup(mapopup);
L.marker([6.4587991816516715, 3.355721739868164]).addTo(map).bindPopup(mapopup);
L.marker([6.4581011123416715, 3.436720739868164]).addTo(map).bindPopup(mapopup);
L.marker([6.4581314077416715, 3.417597739868164]).addTo(map).bindPopup(mapopup);
L.marker([6.4581516809416715, 3.398583739868164]).addTo(map).bindPopup(mapopup);