// -------------------------------------------- HEAT MAP
let map = L.map('map').setView([0,0], 1);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {noWrap: true,foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}', {noWrap: true,ext: 'png', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

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
    for (let country of countryData) {
        if (country["BillingCountry"] === feature.properties.name) {
            layer.bindPopup(feature.properties.name + ': ' + country["SUM(Total)"]);
        }
    }

    layer.on({
         mouseover: function() {
            layer.openPopup();
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

// -------------------------------------------- new content

// -------------------------------------------- best employees
// const employees = document.querySelector("#best-performing-employee");
// const eImages = [
//     '<img src="https://www.pngall.com/wp-content/uploads/5/First-Place-Trophy-PNG.png" alt="First place trophy">',
//     '<img src="https://cdn.pixabay.com/photo/2016/08/26/15/59/medal-1622529_1280.png" alt="silver medale">',
//     '<img src="https://cdn.pixabay.com/photo/2016/08/26/16/04/medal-1622549_1280.png" alt="bronze meadale">'
// ];
//
// employeesData.forEach((employee, index) => {
//     const div = document.createElement('div');
//     div.innerHTML += eImages[index];
//
//     const h3 = document.createElement('h3');
//     h3.innerText = employee.Name;
//     div.appendChild(h3);
//
//     const p = document.createElement('p');
//     p.innerText = employee.count;
//     div.appendChild(p);
//
//     employees.appendChild(div);
// });

// -------------------------------------------- album chart
const album = document.querySelector('#albumChart').getContext('2d');
const albumChart = new Chart(album, {
    type: 'bar',
    data: albumData,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Most sold album',
                font: {
                    size: 16,
                },
            },
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 16,
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 16,
                    }
                }
            }
        }
    }
});

// -------------------------------------------- B2B VS B2C
const b2bOrb2c = document.querySelector('#b2b-b2c').getContext('2d');

const b2bOrb2cChart = new Chart(b2bOrb2c, {
    type: 'pie',
    data: b2borb2cData,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'B2B vs B2C',
                font: {
                    size: 16,
                },
            },
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 16,
                    }
                },
                position: 'bottom',
            },
        },
    }
});