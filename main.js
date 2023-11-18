// -------------------------------------------- HEAT MAP ( LEAFLET JS )
// SET VIEW AND ZOOM ON MAP
let map = L.map('map').setView([45,0], 1);
// ADD TILE LAYER AKA MAP TYPE TO MAP
// NOWRAP: TRUE IS SET SO THAT THE MAP WON'T DUPLICATE WHEN USER MOVES THE MAP
L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}', {noWrap: true,ext: 'png', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

// -------------------------------------------- GEOJSON FOR HEAT MAP ( LEAFLET JS )
// GEOJSON FILE FETCHED TO CREATE AREAS FOR EACH COUNTRY
fetch('./countries.geo.json')
    .then((r) => r.json())
    .then((data) => {
        // ACCESS DATA IN THE GEOJSON
        L.geoJson(data, {
            // CHANGE STYLE ON MAP
            style: function(feature) {
                // FIND THE COUNTRIES IN OUR DATA
                for (let country of countryData) {
                    // IF COUNTRY IS THE SAME IN GEOJSON AS IN OUR DATA
                    if (country["BillingCountry"] === feature.properties.name) {
                        // THEN GIVE THE COUNTRY AREA A COLOR DEPENDING ON SALES AMOUNT
                        return {
                            color: getColor(country["SUM(Total)"]),
                            weight: 1,
                        };
                    }
                }
                // FOR ALL THE COUNTRIES WITH NO SALES DATA, COLOR IT GREY
                return {
                    color: getColor(0),
                    weight: 1,
                };
            },
            // ONEACHFEATURE ADDS A POPUP/TOOLTIP TO THE COUNTRIES
            onEachFeature: onEachFeature,
        // ADD GEOJSON WITH ADDED COLORS TO MAP
        }).addTo(map);
    });

// -------------------------------------------- ON EACH FEATURE FUNCTION
function onEachFeature(feature, layer) {
    for (let country of countryData) {
        // IF THE GEOJSON COUNTRY EXISTS IN THE COUNTRY DATA
        if (country["BillingCountry"] === feature.properties.name) {
            // THEN ADD A POPUP/TOOLTIP WITH THE COUNTRY NAME AND TOTAL SALES AMOUNT FOR THE COUNTRY
            layer.bindPopup(feature.properties.name + ': ' + country["SUM(Total)"]);
        }
    }
    // NO POPUP/TOOLTIP IS ADDED FOR COUNTRIES WITH NO SALES

    // SHOW THE POPUP/TOOLTIP ON MOUSEOVER
    layer.on({
         mouseover: function() {
            layer.openPopup();
        },
    });
}

// -------------------------------------------- COLOR VALUES BASED ON SALES VALUE
function getColor(value) {
    // IF THE BOOLEAN IS TRUE THEN RETURN COLOR CODE
    // ELSE GO ON TO THE NEXT BOOLEAN AND DO THE SAME
    // IF THE VALUE IS LESS THAN OR EQUAL TO 0 THEN RETURN THE GREY COLOR CODE
    return value > 500 ? '#ff0000' :
        value > 300  ? '#ff5c1f' :
        value > 100   ? '#ff7c0c' :
        value > 40   ? '#fc9c1a' :
        value > 0   ? '#f8b84c' :
        '#c4c4c4';
}

// -------------------------------------------- CHANGE CHART FUNCTION
// DEPENDING ON SELECTED DROPDOWN OPTION, ADD DIFFERENT CHART AND DATA
function changeChart() {
    // SHOW TOP 5 ALBUMS
    if (mostSoldOptions.value === 'albums') {
        // ADD SUBHEADING WITH OUR MESSAGE
        mostSoldText.innerText = `The most sold album is ${mostSoldAlbumsData.labels[0]}`;
        // CALL THE FUNCTION CREATECHART AND ADD CHART TO THE EMPTY CHART VARIABLE
        mostSoldChart = createChart(mostSoldChart, mostSold, 'bar', mostSoldAlbumsData, `Most sold ${mostSoldOptions.value}`, mostSoldAlbumssArtistData);
    }
    // SHOW TOP 5 SONGS
    else if (mostSoldOptions.value === 'songs') {
        // ADD SUBHEADING WITH OUR MESSAGE
        mostSoldText.innerText = `The most sold song is ${mostSoldSongsData.labels[0]}`;
        // CALL THE FUNCTION CREATECHART AND ADD CHART TO THE EMPTY CHART VARIABLE
        mostSoldChart = createChart(mostSoldChart, mostSold, 'bar', mostSoldSongsData, `Most sold ${mostSoldOptions.value}`, mostSoldSongsArtistData);
    }
    // SHOW TOP 5 ARTISTS
    else if (mostSoldOptions.value === 'artists') {
        // ADD SUBHEADING WITH OUR MESSAGE
        mostSoldText.innerText = `The most sold artist is ${mostSoldArtistsData.labels[0]}`;
        // CALL THE FUNCTION CREATECHART AND ADD CHART TO THE EMPTY CHART VARIABLE
        mostSoldChart = createChart(mostSoldChart, mostSold, 'bar', mostSoldArtistsData, `Most sold ${mostSoldOptions.value}`);
    }
    // SHOW TOP 5 GENRES
    else if (mostSoldOptions.value === 'genres') {
        // ADD SUBHEADING WITH OUR MESSAGE
        mostSoldText.innerText = `The most sold genre is ${mostSoldGenresData.labels[0]}`;
        // CALL THE FUNCTION CREATECHART AND ADD CHART TO THE EMPTY CHART VARIABLE
        mostSoldChart = createChart(mostSoldChart, mostSold, 'bar', mostSoldGenresData, `Most sold ${mostSoldOptions.value}`);
    }
}

// -------------------------------------------- CREATE CHART FUNCTION
// FUNCTION HAS FOLLOWING PARAMETERS
// - CANVAS REFERENCE (canvas), CHART TYPE (type), DATA OBJECT (data), TITLE AS STRING (title), AND TOOLTIP
function createChart(selectedChart, canvas, type, data, title, footerData) {
    // FIRST CHECK IF SELECTED CHART VARIABLE IS EMPTY OR HAS AN EXISTING CHART
    if (typeof selectedChart === 'object') {
        // IF CHART ALREADY EXISTS, DESTROY IT
        selectedChart.destroy();
    }

    // THE FOOTERDATA SHOULD INCLUDE ARTIST NAME OR NOTHING
    // CHECK IF AN ARGUMENT FOR THE FOOTERDATA WAS SUBMITTED
    // IF IT WASN'T SUBMITTED, MAKE IT AN EMPTY STRING
    footerData = footerData || '';

    // VARIABLE THAT TAKES THE TOOLTIP ITEMS AND CREATES A FUNCTION
    const footer = (tooltipItems) => {
        let artists;
        // FOR EACH ITEM, SET ARTISTS VARIABLE TO THE ARTIST NAME AT SAME INDEX AS TOOLTIP ITEM
        tooltipItems.forEach((item) => {
            artists = footerData[item.parsed.x]
        })
        // RETURN STRING SAYING 'ARTIST: ' + ARTIST NAME
        return 'Artist: ' + artists;
    };

    // CREATE EMPTY TOOLTIP VARIABLE
    let tooltip = {};
    // ADD DATA TO THE TOOLTIP VARIABLE IF FOOTERDATA IS NOT AN EMPTY STRING
    if (footerData.length) {
        tooltip = {
            callbacks: {
                footer: footer,
            }
        }
    }

    // AT LAST RETURN A NEW CHART WITH THE SUBMITTED ARGUMENTS
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
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 16,
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
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

// -------------------------------------------- BEST PERFORMING EMPLOYEES
// ACCESS HTML SECTION ELEMENT
const employees = document.querySelector("#best-performing-employees");
// ARRAY WITH 1ST, 2ND, AND 3RD PLACE IMAGE
const top3Images = [
    '<img src="1st-place.png" alt="First place trophy">',
    '<img src="2nd-place.png" alt="silver medal">',
    '<img src="3rd-place.png" alt="bronze medal">'
];

// ITERATE THROUGH DATA
employeesData.forEach((employee, index) => {
    // CREATE DIV ELEMENT AND ADD CORRECT TOP 3 IMAGE TO DIV
    const div = document.createElement('div');
    div.innerHTML += top3Images[index];
    // CREATE H3 ELEMENT AND ADD EMPLOYEE NAME BEFORE APPENDING TO DIV
    const h3 = document.createElement('h3');
    h3.innerText = employee.Name;
    div.appendChild(h3);
    // CREATE P ELEMENT AND ADD EMPLOYEE SALES COUNT BEFORE APPENDING TO DIV
    const p = document.createElement('p');
    p.innerText = employee.count;
    div.appendChild(p);
    // APPEND DIV TO EMPLOYEES SECTION
    employees.appendChild(div);
});

// -------------------------------------------- B2B VS B2C PIE CHART
// ACCESS HTML CANVAS
const b2bOrb2c = document.querySelector('#b2b-b2c').getContext('2d');
// CREATE NEW PIE CHART IN SELECTED CANVAS
new Chart(b2bOrb2c, {
    type: 'pie',
    // ADD DATA FROM DATA.JS TO CHART
    data: b2borb2cData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            // ADD TITLE TO CHART
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

// -------------------------------------------- MOST SOLD ...
// ACCESS HTML SELECT DROPDOWN
const mostSoldOptions = document.querySelector('#most-sold-options');
// ADD EVENTLISTENER TO CHANGE CHART WITH SELECTED OPTION CHANGES
mostSoldOptions.addEventListener('change', changeChart);

// ACESSS HTML CANVAS
const mostSold = document.querySelector('#most-sold').getContext('2d');
// ACCESS P ELEMENT FOR SUBHEADING
const mostSoldText = document.querySelector('#most-sold-text');
// CREATE EMPTY VARIABLE FOR CHART
let mostSoldChart;
// ADD CHART TO PAGE ON LOAD
changeChart();

// -------------------------------------------- TOTAL SALES PER MONTH
// ACESSS HTML CANVAS
const salesPerMonth = document.querySelector('#sales-per-month').getContext('2d');
// CREATE EMPTY VARIABLE FOR CHART
let salesPerMonthChart;
// CALL THE FUNCTION CREATECHART AND ADD CHART TO THE EMPTY CHART VARIABLE
salesPerMonthChart = createChart(salesPerMonthChart, salesPerMonth, 'bar', salesPerMonthData, `Our total sales grouped by month`)

// -------------------------------------------- AVG SALES PER MONTH
// ACESSS HTML CANVAS
const avgSalesPerMonth = document.querySelector('#avg-sales-per-month').getContext('2d');
// CREATE EMPTY VARIABLE FOR CHART
let avgSalesPerMonthChart;
// CALL THE FUNCTION CREATECHART AND ADD CHART TO THE EMPTY CHART VARIABLE
avgSalesPerMonthChart = createChart(avgSalesPerMonthChart, avgSalesPerMonth, 'bar', avgSalesPerMonthData, `Our average sales per month`)