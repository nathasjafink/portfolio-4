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

// ---------------------------------------- ???