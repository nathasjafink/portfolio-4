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
                            color: getColor(country["SUM(Total)"]),
                            weight: 1,
                        };
                    }
                }

                return {
                    color: getColor(0),
                    weight: 1,
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
    return value > 500 ? '#ff0000' :
        value > 300  ? '#ff5c1f' :
        value > 100   ? '#ff7c0c' :
        value > 40   ? '#fc9c1a' :
        value > 0   ? '#f8b84c' :
        '#c4c4c4';
}


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

// -------------------------------------------- B2B VS B2C
const b2bOrb2c = document.querySelector('#b2b-b2c').getContext('2d');
new Chart(b2bOrb2c, {
    type: 'pie',
    data: b2borb2cData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'How much do we sell to businesses vs private customers',
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

// -------------------------------------------- Most sold ...
const mostSoldOptions = document.querySelector('#most-sold-options');
mostSoldOptions.addEventListener('change', changeChart);

const mostSold = document.querySelector('#most-sold').getContext('2d');
let mostSoldChart;
changeChart();
function changeChart() {
    if (mostSoldOptions.value === 'albums') {
        mostSoldChart = createChart(mostSoldChart, mostSold, 'bar', mostSoldAlbumsData, `Most sold ${mostSoldOptions.value}`, mostSoldAlbumssArtistData)
    }
    else if (mostSoldOptions.value === 'songs') {
        mostSoldChart = createChart(mostSoldChart, mostSold, 'bar', mostSoldSongsData, `Most sold ${mostSoldOptions.value}`, mostSoldSongsArtistData)
    }
    else if (mostSoldOptions.value === 'artists') {
        mostSoldChart = createChart(mostSoldChart, mostSold, 'bar', mostSoldArtistsData, `Most sold ${mostSoldOptions.value}`)
    }
    else if (mostSoldOptions.value === 'genres') {
        mostSoldChart = createChart(mostSoldChart, mostSold, 'bar', mostSoldGenresData, `Most sold ${mostSoldOptions.value}`)
    }
};

function createChart(selectedChart, canvas, type, data, title, footerData) {
    if (typeof selectedChart === 'object') {
        selectedChart.destroy();
    }

    footerData = footerData || '';
    const footer = (tooltipItems) => {
        let artists;
        tooltipItems.forEach((item) => {
            artists = footerData[item.parsed.x]
        })
        return 'Artist: ' + artists;
    };

    let tooltip;
    if (footerData.length) {
        tooltip = {
                callbacks: {
                    footer: footer,
                }
            }
    }
    else {
        tooltip = {
            }
    }

    return new Chart(canvas, {
        type: type,
        data: data,
        options: {
            maintainAspectRatio: false,
            plugins: {
                tooltip: tooltip,
                title: {
                    display: true,
                    text: title,
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
}

// -------------------------------------------- TOTAL SALES PER MONTH
const salesPerMonth = document.querySelector('#sales-per-month').getContext('2d');
let salesPerMonthChart;
salesPerMonthChart = createChart(salesPerMonthChart, salesPerMonth, 'bar', salesPerMonthData, `Our total sales grouped by month`)

// -------------------------------------------- AVG SALES PER MONTH
const avgSalesPerMonth = document.querySelector('#avg-sales-per-month').getContext('2d');
let avgSalesPerMonthChart;
avgSalesPerMonthChart = createChart(avgSalesPerMonthChart, avgSalesPerMonth, 'bar', avgSalesPerMonthData, `Our average sales per month`)
