var map = L.map('map').setView([latitude, longitude], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker;
var markerIcon = L.icon({
    iconUrl: '/ico/location.png',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [-3, -76],
});

marker = L.marker([latitude, longitude], { icon: markerIcon }).addTo(map);