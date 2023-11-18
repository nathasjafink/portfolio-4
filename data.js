// ---------------------------------------- MAIN COLORS
const colors = [
    '#36648B',
    '#57a0d3'
]
// ---------------------------------------- MAIN COLORS WITH LOWER OPACITY
const transparentColors = [
    '#36648B80',
    '#57a0d380'
]
// ---------------------------------------- MAIN COLORS AS GRADIENT FOR BAR CHARTS
const chartBackgroundColors = [
    '#2b5c85',
    '#3E77A8',
    '#3F86C4',
    '#629DD1',
    '#81B1DB'
]

// ---------------------------------------- TOP 1% OF VALUES GET DARKER COLOR THAN THE REST
function colorMax(data) {
    // EMPTY ARRAY FOR COLOR CODES
    const colorArray = [];
    // FIND THE HIGHEST VALUE IN DATASET
    const max = Math.max(...data);
    // FOR EACH DATAPOINT IN THE DATA, ADD COLOR TO ARRAY
    data.map((datapoint) => {
        // FIND THE VALUE THAT IS 1% LESS THAN THE MAX VALUE
        const min = max / 100 * 99;
        // IF DATAPOINT VALUE IS IN TOP 1% OF ALL VALUES THEN MAKE COLOR = FIRST MAIN COLOR AKA COLORS[0]
        // IF DATAPOINT IS NOT IN TOP 1% THEN COLOR = SECOND MAIN COLOR AKA COLORS[1]
        // EXPLANATION:
        // - As the first part checks if datapoint is in top 1%, it is a boolean and will be true and false
        // - the question mark asks if previous part is true or false and then chooses an outcome
        // - if the boolean is true then the first outcome is chosen (colors[0])
        // - and if the boolean is false then the second outcome is chosen (colors[1])
        const color = datapoint > min && datapoint <= max ? colors[0] : colors[1];
        // AFTER THE COLOR IS CHOSEN, IT IS PUSHED TO THE ARRAY FOR COLOR CODES
        colorArray.push(color);
    });
    // RETURN THE ARRAY WITH COLOR CODES FOR ALL DATA ITEMS
    return colorArray;
}

// ---------------------------------------- COUNTRY HEAT MAP
// JSON DATA ADDED TO VARIABLE
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
// DATA PARSED AS A JS OBJECT
countryData = JSON.parse(countryData);

// ---------------------------------------- EMPLOYEES DATA
// JSON DATA ADDED TO VARIABLE
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
`;
// DATA PARSED AS A JS OBJECT
employeesData = JSON.parse(employeesData);

// ---------------------------------------- B2B VS B2C PIE CHART
// DATA STRUCTURE WITHOUT DATA CREATED IN VARIABLE
// TRANSPARENT BACKGROUND COLORS IS USED TO SEE THE VINYL RECORD IMAGE BEHIND
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
// JSON DATA ADDED TO A VARIABLE
let b2bJSON = `[
\t{
\t\t"type": "business",
\t\t"count": 10
\t},
\t{
\t\t"type": "private",
\t\t"count": 49
\t}
]`;
// DATA PARSED AS A JS OBJECT
b2bJSON = JSON.parse(b2bJSON);

// ADDING JSON DATA IN FORM OF CUSTOMER TYPE AND AMOUNT OF CUSTOMER TYPE TO THE DATA STRUCTURE
for (let item of b2bJSON) {
    b2borb2cData.labels.push(item.type);
    b2borb2cData.datasets[0].data.push(item.count);
}

// ---------------------------------------- MOST SOLD DROPDOWN
// -------------------------------- ALBUMS
// CREATING DATA STRUCTURE WITH GRADIENT BAR COLORS
let mostSoldAlbumsData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        name: [],
        backgroundColor: chartBackgroundColors,
    }],
};
// EMPTY ARRAY CREATED FOR ARTISTS OF THE ALBUMS IN THE DATA
let mostSoldAlbumssArtistData = [];
// JSON DATA ADDED TO VARIABLE
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
// DATA PARSED AS A JS OBJECT
mostSoldAlbumsJSON = JSON.parse(mostSoldAlbumsJSON);

// ADDING JSON DATA IN FORM OF ALBUM, ARTIST AND SOLD COUNT TO THE DATA STRUCTURE
for (let item of mostSoldAlbumsJSON) {
    mostSoldAlbumsData.datasets[0].labels.push(item["albumName"]);
    mostSoldAlbumsData.labels.push(item["albumName"]);
    mostSoldAlbumsData.datasets[0].data.push(item["sold"]);
    mostSoldAlbumssArtistData.push(item["artistName"]);
}

// -------------------------------- SONGS
// CREATING DATA STRUCTURE WITH GRADIENT BAR COLORS
let mostSoldSongsData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: chartBackgroundColors,
    }],
};
// EMPTY ARRAY CREATED FOR ARTISTS OF THE SONGS IN THE DATA
let mostSoldSongsArtistData = [];
// JSON DATA ADDED TO VARIABLE
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
// DATA PARSED AS A JS OBJECT
mostSoldSongsJSON = JSON.parse(mostSoldSongsJSON);

// ADDING JSON DATA IN FORM OF SONG, ARTIST AND SOLD COUNT TO THE DATA STRUCTURE
for (let item of mostSoldSongsJSON) {
    mostSoldSongsData.datasets[0].labels.push(item["trackName"]);
    mostSoldSongsData.labels.push(item["trackName"]);
    mostSoldSongsData.datasets[0].data.push(item["sold"]);
    mostSoldSongsArtistData.push(item["artistName"]);
}

// -------------------------------- ARTISTS
// CREATING DATA STRUCTURE WITH GRADIENT BAR COLORS
let mostSoldArtistsData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: chartBackgroundColors,
    }],
};
// JSON DATA ADDED TO VARIABLE
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
// DATA PARSED AS A JS OBJECT
mostSoldArtistsJSON = JSON.parse(mostSoldArtistsJSON)

// ADDING JSON DATA IN FORM OF ARTIST AND SOLD COUNT TO THE DATA STRUCTURE
for (let item of mostSoldArtistsJSON) {
    mostSoldArtistsData.datasets[0].labels.push(item["artistName"]);
    mostSoldArtistsData.labels.push(item["artistName"]);
    mostSoldArtistsData.datasets[0].data.push(item["sold"]);
}

// -------------------------------- GENRES
// CREATING DATA STRUCTURE WITH GRADIENT BAR COLORS
let mostSoldGenresData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: chartBackgroundColors,
    }],
};
// JSON DATA ADDED TO VARIABLE
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
// DATA PARSED AS A JS OBJECT
mostSoldGenresJSON = JSON.parse(mostSoldGenresJSON)

// ADDING JSON DATA IN FORM OF GENRE AND SOLD COUNT TO THE DATA STRUCTURE
for (let item of mostSoldGenresJSON) {
    mostSoldGenresData.datasets[0].labels.push(item["genre"]);
    mostSoldGenresData.labels.push(item["genre"]);
    mostSoldGenresData.datasets[0].data.push(item["sold"]);
}

// ------------------------------------------- SALES GROUPED BY MONTH
// CREATING DATA STRUCTURE
const salesPerMonthData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: '',
    }],
};
// JSON DATA ADDED TO VARIABLE
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
]`;
// DATA PARSED AS A JS OBJECT
salesPerMonthJSON = JSON.parse(salesPerMonthJSON);

// ADDING JSON DATA IN FORM OF MONTH AND SOLD COUNT TO THE DATA STRUCTURE
for (let item of salesPerMonthJSON) {
    // SLICE(0,3) MEANS THAT ONLY THE FIRST 3 CHARACTERS OF THE STRING WILL BE EXTRACTED
    salesPerMonthData.datasets[0].labels.push(item["month"].slice(0,3));
    salesPerMonthData.labels.push(item["month"].slice(0,3));
    salesPerMonthData.datasets[0].data.push(item["sold"]);
}
// BACKGROUND COLORS FOR HIGHEST VALUES MADE DARKER
salesPerMonthData.datasets[0].backgroundColor = colorMax(salesPerMonthData.datasets[0].data);

// ------------------------------------------- AVG SALES GROUPED BY MONTH
// CREATING DATA STRUCTURE
const avgSalesPerMonthData = {
    labels: [],
    datasets: [{
        labels: [],
        data: [],
        backgroundColor: '',
    }],
};
// JSON DATA ADDED TO VARIABLE
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
// DATA PARSED AS A JS OBJECT
avgSalesPerMonthJSON = JSON.parse(avgSalesPerMonthJSON);

// ADDING JSON DATA IN FORM OF MONTH AND AVG SOLD COUNT TO THE DATA STRUCTURE
for (let item of avgSalesPerMonthJSON) {
    // SLICE(0,3) MEANS THAT ONLY THE FIRST 3 CHARACTERS OF THE STRING WILL BE EXTRACTED
    avgSalesPerMonthData.datasets[0].labels.push(item["month"].slice(0,3));
    avgSalesPerMonthData.labels.push(item["month"].slice(0,3));
    avgSalesPerMonthData.datasets[0].data.push(item["sold"]);
}
// BACKGROUND COLORS FOR HIGHEST VALUES MADE DARKER
avgSalesPerMonthData.datasets[0].backgroundColor = colorMax(avgSalesPerMonthData.datasets[0].data);