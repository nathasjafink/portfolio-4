// -------------------------------------------- HEAT MAP

let map = L.map('map').setView([0,0], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {noWrap: true,foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

// Geocoding
// https://nominatim.org/release-docs/latest/api/Search/
fetch('./countries.geojson')
    .then((r) => r.json())
    .then((data) => {
        L.geoJson(data, {
            style: function(feature) {
                // Define your styling based on data properties
                for (let country of countryData) {
                    if (country["BillingCountry"] === feature.properties.name) {
                        return {
                            fillColor: getColor(country["SUM(Total)"]),
                            weight: 1,
                            opacity: 1,
                            color: '#000'
                        };
                    }
                }

                return {
                    fillColor: getColor(0),
                    weight: 1,
                    opacity: 1,
                    color: '#000'
                };
            },
            onEachFeature: onEachFeature,
        }).addTo(map);
    });

// Load GeoJSON data
function onEachFeature(feature, layer) {
    layer.bindPopup(feature.properties.name + ': 0');

    for (let country of countryData) {
        if (country["BillingCountry"] === feature.properties.name) {
            layer.setPopupContent(feature.properties.name + ': ' + country["SUM(Total)"]);
        }
    }

    layer.on({
         mouseover: function() {
            layer.openPopup();
        },
        mouseout: function() {
            layer.closePopup();
        },
    });
}



// Define a function to get color based on data
function getColor(value) {
    // Define your color scale based on your data range
    return value > 500 ? '#800026' :
        value > 400  ? '#BD0026' :
        value > 300  ? '#E31A1C' :
        value > 200  ? '#FC4E2A' :
        value > 100   ? '#FD8D3C' :
        value > 50   ? '#FEB24C' :
        value > 40   ? '#FED976' :
        value > 0   ? '#FFEDA0' :
        '#c4c4c4';
}

// -------------------------------------------- Best performing employess
