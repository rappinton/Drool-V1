// Map
var map = L.map('mapContainer').setView([6.460422, 3.409448], 15);

var options = {
	zoomControl: false,
	scrollWheelZoom: false,
	center: [43, 0],
	zoomControl: true,
	zoom: 3
  };

var layer =
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
attribution: 'Drool Spots'
}).addTo(map);

L.marker([6.42533164432, 3.40933498362]).addTo(map).bindPopup('Chicken Republic')