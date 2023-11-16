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
let employeesData = [];
let emData = `[
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
emData = JSON.parse(emData);

for (let employee of emData) {
    employeesData.push(
        {
            x: employee["Name"],
            y: employee["count"],
        }
    );
}

// let employeesData = `[
// \t{
// \t\t"Name" : "Jane Peacock",
// \t\t"count" : 21
// \t},
// \t{
// \t\t"Name" : "Margaret Park",
// \t\t"count" : 20
// \t},
// \t{
// \t\t"Name" : "Steve Johnson",
// \t\t"count" : 18
// \t}
// ]
// `
// employeesData = JSON.parse(emData);

// ---------------------------------------- B2B VS B2C PIE CHART
let b2borb2cData = {
    labels: [],
    datasets: [{
        data: [],
        backgroundColor: [
            'rgba(99,185,255,0.39)',
            'rgba(255, 99, 132, 0.39)'
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
        backgroundColor: [
            'rgb(99,185,255)',
            'rgba(255, 99, 132)'
        ],
    }],
};
let mostSoldAlbumsJSON = `[
\t{
\t\t"SUM(Quantity)" : 27,
\t\t"Title" : "Minha Historia",
\t\t"name" : "Chico Buarque"
\t},
\t{
\t\t"SUM(Quantity)" : 26,
\t\t"Title" : "Greatest Hits",
\t\t"name" : "Lenny Kravitz"
\t},
\t{
\t\t"SUM(Quantity)" : 25,
\t\t"Title" : "Unplugged",
\t\t"name" : "Eric Clapton"
\t},
\t{
\t\t"SUM(Quantity)" : 22,
\t\t"Title" : "Acústico",
\t\t"name" : "Titãs"
\t},
\t{
\t\t"SUM(Quantity)" : 20,
\t\t"Title" : "Greatest Kiss",
\t\t"name" : "Kiss"
\t}
]`

mostSoldAlbumsJSON = JSON.parse(mostSoldAlbumsJSON)
for (let album of mostSoldAlbumsJSON) {
   /* mostSoldAlbumsData.datasets[0].labels.push(album["Title"], ["name"]);*/
    let combinedLabels = `${album["Title"]} by ${album["name"]}`;
    mostSoldAlbumsData.labels.push(combinedLabels);
    mostSoldAlbumsData.datasets[0].data.push(album["SUM(Quantity)"]);
}

// -------------------------------- SONGS
let mostSoldSongsData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: [
            'rgb(99,185,255)',
            'rgba(255, 99, 132)'
        ],
    }],
};
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
]`
mostSoldSongsJSON = JSON.parse(mostSoldSongsJSON)

for (let item of mostSoldSongsJSON) {
    mostSoldSongsData.datasets[0].labels.push(item["trackName"]);
    mostSoldSongsData.labels.push(item["trackName"]);
    mostSoldSongsData.datasets[0].data.push(item["sold"]);
}

// -------------------------------- ARTISTS
let mostSoldArtistsData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: [
            'rgb(99,185,255)',
            'rgba(255, 99, 132)'
        ],
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
        backgroundColor: [
            'rgb(99,185,255)',
            'rgba(255, 99, 132)'
        ],
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