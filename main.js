const ctx = document.querySelector('#chart').getContext('2d');

// const chart = new Chart(ctx, {
//     type: 'scatter',
//     data: {
//         datasets: [{
//             label: 'Houses',
//             data: [
//                 { x: 100, y: 1000000},
//                 { x: 110, y: 2500000},
//                 { x: 120, y: 2000000},
//                 { x: 150, y: 3000000},
//             ],
//             backgroundColor: 'rgba(255, 99, 132)',
//         }]
//     },
//     options: {
//         onClick: (e) => {
//             let activePoints = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
//             if (activePoints.length > 0) {
//                 let data = Chart.helpers.getRelativePosition(e, activePoints);
//
//                 const dataX = Math.round(chart.scales.x.getValueForPixel(data.x));
//                 const dataY = Math.round(chart.scales.y.getValueForPixel(data.y)/500000)*500000;
//
//                 alert('house size: ' + dataX + '\n house price: ' + dataY)
//             }
//
//         },
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'House prices vs size',
//                 font: {
//                     size: 16,
//                 },
//             },
//             legend: {
//                 display: true,
//                 labels: {
//                     font: {
//                         size: 16,
//                     }
//                 },
//                 position: 'bottom',
//             }
//         },
//         scales: {
//             x: {
//                 min: 90,
//                 max: 160,
//                 ticks: {
//                     font: {
//                         size: 16,
//                     }
//                 }
//             },
//             y: {
//                 min: 1000000,
//                 max: 3000000,
//                 ticks: {
//                     font: {
//                         size: 16,
//                     }
//                 }
//             }
//         }
//     }
// });

// fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json()).then((data) => {
//     const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;
//
//     const chart = new Chart(document.querySelector("#canvas").getContext("2d"), {
//         type: 'choropleth',
//         data: {
//             labels: countries.map((d) => d.properties.name),
//             datasets: [{
//                 label: 'Countries',
//                 data: countries.map((d) => ({feature: d, value: Math.random()})),
//             }]
//         },
//         options: {
//             showOutline: true,
//             showGraticule: true,
//             plugins: {
//                 legend: {
//                     display: false
//                 },
//             },
//             scales: {
//                 projection: {
//                     axis: 'x',
//                     projection: 'equalEarth'
//                 }
//             }
//         }
//     });
// });

// -------------------------------------------- HEAT MAP

let map = L.map('map').setView([0,0], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

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
         mouseover: function(e) {
            layer.openPopup();
        },
        mouseout: function(e) {
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

// -------------------------------------------- NEW THINGS