function travelTime(data) {
    let dataCopy = Object.assign([], data);
    let destinations = {};

    for (let data of dataCopy) {
        let [country, town, price] = data.split(' > ');

        if (!destinations.hasOwnProperty(country)) destinations[country] = [];

        if (destinations[country].includes(town)) {
            let townPosition = destinations[country].indexOf(town);
            let townPrice = destinations[country][townPosition + 1];
            if (townPrice > price) {
                destinations[country].splice(townPosition, 1);
                let townPricePosition = destinations[country].indexOf(townPrice);
                destinations[country].splice(townPricePosition, 1);
            } else {

            }
        }
        destinations[country].push(town, price);
    }

    for (let key in destinations) {
        let name, price;
        let towns = new Map();

        for (let i = 0; i < destinations[key].length; i++) {
            i % 2 === 0 ? name = destinations[key][i] : price = destinations[key][i];
            if (i % 2 !== 0) towns.set(name, price);
        }
        destinations[key].splice(0);
        destinations[key].push(towns);
    }

    let sortByName = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));
    let sortByPrice = sortByName.slice(1);
    /// sortByPrice.sort((a, b) => b[1][0].values().next().value - a[1][0].values().next().value);

    sortByName.forEach(item => {
        //   console.log(`${item[0]} -> ${item[1][0].keys().next().value} -> ${item[1][0].values().next().value}`);
    });

    /// console.log(sortByName[1][1].values().next().value);
    console.table(destinations['Bulgaria'][0]);
}


/**8.	*Travel Time
Write a function that collects and orders information about travel destinations.
As input, you will receive an array of strings.
Each string will consist of the following information with the format:
"Country name > Town name > Travel cost"

The Country name will be a string, the Town name will be a unique string, Travel cost will be a number.
If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may have several Towns to visit.
After you finish the organizational part, you need to let Steven know which destination point to visit first. The order will be as follows:  First sort Country names alphabetically and then sort by lowest Travel cost.
 */

function organizeDestinations(destinations) {
    // Create an object to store the cheapest travel cost for each town
    const cheapestCosts = {};

    // Loop through the destinations array and update the cheapestCosts object
    for (const destination of destinations) {
        const [country, town, cost] = destination.split(" > ");
        if (!cheapestCosts[town] || cost < cheapestCosts[town]) {
            cheapestCosts[town] = cost;
        }
    }

    // Create an array of objects representing each destination
    const organizedDestinations = [];
    for (const destination of destinations) {
        const [country, town, cost] = destination.split(" > ");
        if (cost === cheapestCosts[town]) {
            organizedDestinations.push({ country, town, cost: Number(cost) });
        }
    }

    // Sort the array of destinations by country name and then by travel cost
    organizedDestinations.sort((a, b) => {
        if (a.country < b.country) {
            return -1;
        } else if (a.country > b.country) {
            return 1;
        } else {
            return a.cost - b.cost;
        }
    });

    // Return the sorted array of destinations
    return organizedDestinations;
}

// Example usage:
const destinations = [
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"

];
const sortedDestinations = organizeDestinations(destinations);
console.log(sortedDestinations[1]);
