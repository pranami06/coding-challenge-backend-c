const readCityData = require('../data/dataReader');

module.exports.getCities = async function () {
    try {
        let cities  = await readCityData.getCityData();
        let filteredCities = filterCities(cities);
        return filteredCities;

    } catch (err) {
        console.log('error');
    }
}

function filterCities (cities) {
    let filteredCities = cities.filter((city) => {
        if ((city.country === 'CA' || city.country === 'US') && city.population > 5000) {  
            city.alt_name = city.alt_name.split(',').map((altName) => {
                return altName.trim();
            })          
            return city;
        }
    });
    return filteredCities;
}