var map = L.map('map', {});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var control = L.Routing
	.control(
		L.extend(window.lrmConfig, {
			waypoints: [
				L.latLng(19.429461449637476, -99.20584827661514),
				L.latLng(19.43922740827415, -99.20243382453918)
			],
			geocoder: L.Control.Geocoder.nominatim(),
			routeWhileDragging: true,
			reverseWaypoints: true,
			showAlternatives: true,
			altLineOptions: {
				styles: [
					{ color: 'black', opacity: 0.15, weight: 9 },
					{ color: 'white', opacity: 0.8, weight: 6 },
					{ color: 'blue', opacity: 0.5, weight: 2 }
				]
			}
		})
	)
	.addTo(map);

var options = {
	position: 'topleft',
	drawMarker: true,
	drawPolyne: true,
	drawRectangle: true,
	drawPolygon: true,
	drawCircle: true,
	cutPolygon: true,
	editMode: true,
	removalMode: true
};

map.pm.addControls(options);

// funcion to search our geoposition, through the bowser.
if ('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position.coords.latitude, position.coords.longitude);
		// circle of our geoposition with styles
		L.circle([ position.coords.latitude, position.coords.longitude ], {
			radius: 400,
			opacity: 1,
			color: 'white',
			weight: 1,
			fillColor: 'blue',
			fillOpacity: 0.5
		}).addTo(map);
	});
} else {
	console.log('you dont have geolocation');
}

//GeoJSON krispy kreme
var geojson = {
	features: [
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.15693014860153, 19.421660401938375 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.15715277194977, 19.41530343472 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.16147649288176, 19.42919079699207 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.15510088205338, 19.41145574246444 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.166738986969, 19.406661810457003 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.15420234203339, 19.402872100875346 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.13861334323882, 19.43371847817348 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.17520672082901, 19.425267547722687 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.14331793785095, 19.434340708291575 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.13299947977066, 19.430976590230028 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.1830575466156, 19.434199062620618 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.20722424983978, 19.4408360413073 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.119553565979, 19.471710610838137 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.2188811302185, 19.45487802240015 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.20185983181, 19.439283053079183 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.13129091262817, 19.486296091491727 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.10564363002777, 19.417873571581808 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.15314018726349, 19.443168025040652 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.20584827661514, 19.429461449637476 ] }
		},
		{
			type: 'Feature',
			properties: {},
			geometry: { type: 'Point', coordinates: [ -99.20243382453918, 19.43922740827415 ] }
		}
	]
};

L.geoJSON(geojson).addTo(map);

L.Routing.errorControl(control).addTo(map);
