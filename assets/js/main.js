// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

// setting parameters
var map= L.map('map', {
    layer: MQ.mapLayer(),
    center: [49.228537499999995, -123.10585798903601],
    zoom: 12
});

var dir =MQ.routing.directions(); 
dir.route({
    locations: [
        'Vancouver, BC',
        'Richmond, BC'
    ]
});

CustomRouteLayer = MQ.Routing.RouteLayer.extend({
    createStartMarker: (location)=> {
        var custom_icon;
        var marker;

        custom_icon=L.icon({
            iconUrl:'C:\Users\alice\groupworkspace\project1\img\blue.png',
            iconSize: [20,29],
            iconAnchor: [10,29],
            popupAnchor: [0,29]
        });
        marker = L.marker(location.latLng,{icon:custom_icon}).addTo(map);
        return marker;
    },
    createEndMarker: (location)=> {
        var custom_icon;
        var marker;

        custom_icon=L.icon({
            iconUrl:'C:\Users\alice\groupworkspace\project1\img\destination icon.png',
            iconSize: [20,29],
            iconAnchor: [10,29],
            popupAnchor: [0,29]
        });
        marker = L.marker(location.latLng,{icon:custom_icon}).addTo(map);
        return marker;
    }
});
map.addLayer(new CustomRouteLayer({
    directions: dir,
}))
