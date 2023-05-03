// setting parameters
var map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [49.228537499999995, -123.10585798903601],
    zoom: 12
});

function runDirections(start, end) {
    //recreating new map layer
    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [49.228537499999995, -123.10585798903601],
        zoom: 12
    });

    var dir = MQ.routing.directions();
    dir.route({
        locations: [
            start,
            end
        ]
    });

    CustomRouteLayer = MQ.Routing.RouteLayer.extend({
        createStartMarker: (location) => {
            var custom_icon;
            var marker;

            custom_icon = L.icon({
                iconUrl: 'assets/img/blue.png',
                iconSize: [20, 29],
                iconAnchor: [10, 29],
                popupAnchor: [0, 29]
            });
            marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);
            return marker;
        },
        createEndMarker: (location) => {
            var custom_icon;
            var marker;

            custom_icon = L.icon({
                iconUrl: 'assets/img/destination icon.png',
                iconSize: [20, 29],
                iconAnchor: [10, 29],
                popupAnchor: [0, 29]
            });
            marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);
            return marker;
        }
    });
    map.addLayer(new CustomRouteLayer({
        directions: dir,
        fitBounds: true
    }));
}
//runs when form is submitted
function submitForm(event) {
    event.preventDefault();

    //delete current map layer (so when you type in a new location the old route doesn't stay on the map)
    map.remove();

    // get form data
    start = document.getElementById("start").value;
    end = document.getElementById("destination").value;

    //run directions function
    runDirections(start, end);
}
const form = document.getElementById('form');
//call the submitForm function when submit
form.addEventListener('submit', submitForm);

setTimeout(function(){
    var urlParams = new URLSearchParams(window.location.search);
    var start = urlParams.get("start");
    var destination = urlParams.get("destination");
    $("#start").val(start);
    $("#destination").val(destination);
    $("#directions").click();   //how to add it in the separate window? -   window.open(url, '_blank');
},500)