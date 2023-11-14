let tracksData;
fetch(`tracks.json`)
    .then(response => response.json())
    .then(tracks => {
        tracksData = tracks;
    });

let countryData;
fetch(`countries.json`)
    .then(response => response.json())
    .then(countries => {
        countryData = countries;
    });