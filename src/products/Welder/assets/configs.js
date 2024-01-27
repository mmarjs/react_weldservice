import queryString from 'query-string';

let url = window.location.search;
let params = queryString.parse(url);

let configs = {};

if(Object.keys(params).length > 0) {
    configs = {
        phone : params.phone,
        email : params.email,
        companyName: params.company_name,
        companyAddress: params.address,
        greatCity: params.great_city
    };
}
else {
    configs = {
        phone : "514-571-9094",
        email : "demo@gmail.com",
        companyName: "Mario Power Inc.",
        companyAddress: "6555 Avenue Kildair, Cote-Saint-Luc, QC",
        greatCity: "Edmonton"
    };
}

export default configs;
