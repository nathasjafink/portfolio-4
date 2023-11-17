const colors = [
    '#36648B',
    '#57a0d3'
]
const transparentColors = [
    '#36648B80',
    '#57a0d380'
]

const chartBackgroundColors = [
    '#2b5c85',
    '#3E77A8',
    '#3F86C4',
    '#629DD1',
    '#81B1DB'
]

// ---------------------------------------- COUNTRY HEAT MAP
let countryData = `[
\t{
\t\t"BillingCountry" : "United States of America",
\t\t"SUM(Total)" : 523.06
\t},
\t{
\t\t"BillingCountry" : "Canada",
\t\t"SUM(Total)" : 303.96
\t},
\t{
\t\t"BillingCountry" : "France",
\t\t"SUM(Total)" : 195.10
\t},
\t{
\t\t"BillingCountry" : "Brazil",
\t\t"SUM(Total)" : 190.10
\t},
\t{
\t\t"BillingCountry" : "Germany",
\t\t"SUM(Total)" : 156.48
\t},
\t{
\t\t"BillingCountry" : "United Kingdom",
\t\t"SUM(Total)" : 112.86
\t},
\t{
\t\t"BillingCountry" : "Czech Republic",
\t\t"SUM(Total)" : 90.24
\t},
\t{
\t\t"BillingCountry" : "Portugal",
\t\t"SUM(Total)" : 77.24
\t},
\t{
\t\t"BillingCountry" : "India",
\t\t"SUM(Total)" : 75.26
\t},
\t{
\t\t"BillingCountry" : "Chile",
\t\t"SUM(Total)" : 46.62
\t},
\t{
\t\t"BillingCountry" : "Ireland",
\t\t"SUM(Total)" : 45.62
\t},
\t{
\t\t"BillingCountry" : "Hungary",
\t\t"SUM(Total)" : 45.62
\t},
\t{
\t\t"BillingCountry" : "Austria",
\t\t"SUM(Total)" : 42.62
\t},
\t{
\t\t"BillingCountry" : "Finland",
\t\t"SUM(Total)" : 41.62
\t},
\t{
\t\t"BillingCountry" : "Netherlands",
\t\t"SUM(Total)" : 40.62
\t},
\t{
\t\t"BillingCountry" : "Norway",
\t\t"SUM(Total)" : 39.62
\t},
\t{
\t\t"BillingCountry" : "Sweden",
\t\t"SUM(Total)" : 38.62
\t},
\t{
\t\t"BillingCountry" : "Belgium",
\t\t"SUM(Total)" : 37.62
\t},
\t{
\t\t"BillingCountry" : "Australia",
\t\t"SUM(Total)" : 37.62
\t},
\t{
\t\t"BillingCountry" : "Spain",
\t\t"SUM(Total)" : 37.62
\t},
\t{
\t\t"BillingCountry" : "Denmark",
\t\t"SUM(Total)" : 37.62
\t},
\t{
\t\t"BillingCountry" : "Italy",
\t\t"SUM(Total)" : 37.62
\t},
\t{
\t\t"BillingCountry" : "Poland",
\t\t"SUM(Total)" : 37.62
\t},
\t{
\t\t"BillingCountry" : "Argentina",
\t\t"SUM(Total)" : 37.62
\t}
]
`;
countryData = JSON.parse(countryData);

// ---------------------------------------- EMPLOYEES DATA
let employeesData = `[
\t{
\t\t"Name" : "Jane Peacock",
\t\t"count" : 21
\t},
\t{
\t\t"Name" : "Margaret Park",
\t\t"count" : 20
\t},
\t{
\t\t"Name" : "Steve Johnson",
\t\t"count" : 18
\t}
]
`
employeesData = JSON.parse(employeesData);

// ---------------------------------------- B2B VS B2C PIE CHART
let b2borb2cData = {
    labels: [],
    datasets: [{
        data: [],
        backgroundColor: [
            transparentColors[0],
            transparentColors[1]
        ],
    }],
};
let b2bData = `[
\t{
\t\t"type": "business",
\t\t"count": 10
\t},
\t{
\t\t"type": "private",
\t\t"count": 49
\t}
]`;
b2bData = JSON.parse(b2bData);

for (let customer of b2bData) {
    b2borb2cData.labels.push(customer.type);
    b2borb2cData.datasets[0].data.push(customer.count);
}

// ---------------------------------------- MOST SOLD DROPDOWN
// -------------------------------- SONGS
let mostSoldAlbumsData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        name: [],
        backgroundColor: chartBackgroundColors,
    }],
};
let mostSoldAlbumssArtistData = [];
let mostSoldAlbumsJSON = `[
\t{
\t\t"sold" : 27,
\t\t"albumName" : "Minha Historia",
\t\t"artistName" : "Chico Buarque"
\t},
\t{
\t\t"sold" : 26,
\t\t"albumName" : "Greatest Hits",
\t\t"artistName" : "Lenny Kravitz"
\t},
\t{
\t\t"sold" : 25,
\t\t"albumName" : "Unplugged",
\t\t"artistName" : "Eric Clapton"
\t},
\t{
\t\t"sold" : 22,
\t\t"albumName" : "Acústico",
\t\t"artistName" : "Titãs"
\t},
\t{
\t\t"sold" : 20,
\t\t"albumName" : "Greatest Kiss",
\t\t"artistName" : "Kiss"
\t}
]
`;

mostSoldAlbumsJSON = JSON.parse(mostSoldAlbumsJSON)
for (let item of mostSoldAlbumsJSON) {
    mostSoldAlbumsData.datasets[0].labels.push(item["albumName"]);
    mostSoldAlbumsData.labels.push(item["albumName"]);
    mostSoldAlbumsData.datasets[0].data.push(item["sold"]);
    mostSoldAlbumssArtistData.push(item["artistName"]);
}

// -------------------------------- SONGS
let mostSoldSongsData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: chartBackgroundColors,
    }],
};
let mostSoldSongsArtistData = [];
let mostSoldSongsJSON = `[
\t{
\t\t"sold" : 5,
\t\t"trackName" : "The Trooper",
\t\t"artistName" : "Iron Maiden"
\t},
\t{
\t\t"sold" : 5,
\t\t"trackName" : "Dazed and Confused",
\t\t"artistName" : "Led Zeppelin"
\t},
\t{
\t\t"sold" : 4,
\t\t"trackName" : "The Number Of The Beast",
\t\t"artistName" : "Iron Maiden"
\t},
\t{
\t\t"sold" : 4,
\t\t"trackName" : "Hallowed Be Thy Name",
\t\t"artistName" : "Iron Maiden"
\t},
\t{
\t\t"sold" : 4,
\t\t"trackName" : "Sure Know Something",
\t\t"artistName" : "Kiss"
\t}
]`;
mostSoldSongsJSON = JSON.parse(mostSoldSongsJSON);

for (let item of mostSoldSongsJSON) {
    mostSoldSongsData.datasets[0].labels.push(item["trackName"]);
    mostSoldSongsData.labels.push(item["trackName"]);
    mostSoldSongsData.datasets[0].data.push(item["sold"]);
    mostSoldSongsArtistData.push(item["artistName"]);
}

// -------------------------------- ARTISTS
let mostSoldArtistsData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: chartBackgroundColors,
    }],
};
let mostSoldArtistsJSON = `[
\t{
\t\t"sold" : 140,
\t\t"artistName" : "Iron Maiden"
\t},
\t{
\t\t"sold" : 107,
\t\t"artistName" : "U2"
\t},
\t{
\t\t"sold" : 91,
\t\t"artistName" : "Metallica"
\t},
\t{
\t\t"sold" : 87,
\t\t"artistName" : "Led Zeppelin"
\t},
\t{
\t\t"sold" : 45,
\t\t"artistName" : "Os Paralamas Do Sucesso"
\t}
]`
mostSoldArtistsJSON = JSON.parse(mostSoldArtistsJSON)

for (let item of mostSoldArtistsJSON) {
    mostSoldArtistsData.datasets[0].labels.push(item["artistName"]);
    mostSoldArtistsData.labels.push(item["artistName"]);
    mostSoldArtistsData.datasets[0].data.push(item["sold"]);
}

// -------------------------------- GENRES
let mostSoldGenresData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: chartBackgroundColors,
    }],
};
let mostSoldGenresJSON = `[
\t{
\t\t"sold" : 835,
\t\t"genre" : "Rock"
\t},
\t{
\t\t"sold" : 386,
\t\t"genre" : "Latin"
\t},
\t{
\t\t"sold" : 264,
\t\t"genre" : "Metal"
\t},
\t{
\t\t"sold" : 244,
\t\t"genre" : "Alternative & Punk"
\t},
\t{
\t\t"sold" : 80,
\t\t"genre" : "Jazz"
\t}
]`
mostSoldGenresJSON = JSON.parse(mostSoldGenresJSON)

for (let item of mostSoldGenresJSON) {
    mostSoldGenresData.datasets[0].labels.push(item["genre"]);
    mostSoldGenresData.labels.push(item["genre"]);
    mostSoldGenresData.datasets[0].data.push(item["sold"]);
}

// ------------------------------------------- SALES GROUPED BY MONTH
const salesPerMonthData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: chartBackgroundColors,
    }],
};
let salesPerMonthJSON = `[
\t{
\t\t"month" : "January",
\t\t"sold" : 34
\t},
\t{
\t\t"month" : "February",
\t\t"sold" : 33
\t},
\t{
\t\t"month" : "March",
\t\t"sold" : 35
\t},
\t{
\t\t"month" : "April",
\t\t"sold" : 33
\t},
\t{
\t\t"month" : "May",
\t\t"sold" : 35
\t},
\t{
\t\t"month" : "June",
\t\t"sold" : 35
\t},
\t{
\t\t"month" : "July",
\t\t"sold" : 35
\t},
\t{
\t\t"month" : "August",
\t\t"sold" : 35
\t},
\t{
\t\t"month" : "September",
\t\t"sold" : 33
\t},
\t{
\t\t"month" : "October",
\t\t"sold" : 35
\t},
\t{
\t\t"month" : "November",
\t\t"sold" : 34
\t},
\t{
\t\t"month" : "December",
\t\t"sold" : 35
\t}
]`
salesPerMonthJSON = JSON.parse(salesPerMonthJSON)

for (let item of salesPerMonthJSON) {
    salesPerMonthData.datasets[0].labels.push(item["month"].slice(0,3));
    salesPerMonthData.labels.push(item["month"].slice(0,3));
    salesPerMonthData.datasets[0].data.push(item["sold"]);
}
salesPerMonthData.datasets[0].backgroundColor = colorMax(salesPerMonthData.datasets[0].data);

// ------------------------------------------- AVG SALES GROUPED BY MONTH
const avgSalesPerMonthData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: chartBackgroundColors,
    }],
};
let avgSalesPerMonthJSON = `[
\t{
\t\t"month" : "January",
\t\t"sold" : 5.915294
\t},
\t{
\t\t"month" : "February",
\t\t"sold" : 5.672727
\t},
\t{
\t\t"month" : "March",
\t\t"sold" : 5.574286
\t},
\t{
\t\t"month" : "April",
\t\t"sold" : 6.004242
\t},
\t{
\t\t"month" : "May",
\t\t"sold" : 5.517143
\t},
\t{
\t\t"month" : "June",
\t\t"sold" : 5.745714
\t},
\t{
\t\t"month" : "July",
\t\t"sold" : 5.431429
\t},
\t{
\t\t"month" : "August",
\t\t"sold" : 5.660000
\t},
\t{
\t\t"month" : "September",
\t\t"sold" : 5.945455
\t},
\t{
\t\t"month" : "October",
\t\t"sold" : 5.517143
\t},
\t{
\t\t"month" : "November",
\t\t"sold" : 5.477647
\t},
\t{
\t\t"month" : "December",
\t\t"sold" : 5.402857
\t}
]`;
avgSalesPerMonthJSON = JSON.parse(avgSalesPerMonthJSON)

for (let item of avgSalesPerMonthJSON) {
    avgSalesPerMonthData.datasets[0].labels.push(item["month"].slice(0,3));
    avgSalesPerMonthData.labels.push(item["month"].slice(0,3));
    avgSalesPerMonthData.datasets[0].data.push(item["sold"]);
}
avgSalesPerMonthData.datasets[0].backgroundColor = colorMax(avgSalesPerMonthData.datasets[0].data);


function colorMax(data) {
    const colorArray = [];
    const max = Math.max(...data);
    data.map((datapoint, index) => {
        const min = max / 100 * 99;
        const color = datapoint > min && datapoint <= max ? colors[0] : colors[1];
        colorArray.push(color);
    });
    return colorArray;
}