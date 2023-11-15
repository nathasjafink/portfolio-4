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

// -------------------------------------------- Best performing employess
const ctx = document.querySelector('#employees-chart').getContext('2d');
const bestPerformingChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Sales',
            data: employeesData,
            backgroundColor: 'rgba(255, 99, 132)',
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Best Performing Employees',
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


// -------------------------------------------- new content

// -------------------------------------------- album chart
const album = document.querySelector('#albumChart').getContext('2d');
const albumChart = new Chart(album, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Albums',
            data: albumData,
            backgroundColor: 'rgba(255, 99, 132)',
        }]
    },
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
                display: true,
                labels: {
                    font: {
                        size: 16,
                    }
                },
                position: 'bottom',
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

// -------------------------------------------- ANE
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