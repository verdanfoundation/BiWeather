var coordinates = Coordinates.createNull();
var isPlaceSelected = false;

var marker;
var markerIcon = L.icon({
    iconUrl: '/ico/location.png',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [-3, -76],
});

var map = L.map('map').setView([50.164909, 22.373099], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onMapClick(e) {
    coordinates = Coordinates.createFromLatLng(e.latlng);

    if (isPlaceSelected) {
        marker.remove();
    }

    marker = L.marker([coordinates.latitude, coordinates.longitude], { icon: markerIcon }).addTo(map);
    isPlaceSelected = true;
    $("#show-weather").removeClass("weather-disabled");
    $("#show-weather").addClass("weather-enabled");
}

map.on('click', onMapClick);

$("#show-weather").on('click', function() {
    window.location.href = "weather.html?lat=" + coordinates.latitude + "&lon=" + coordinates.longitude;
});