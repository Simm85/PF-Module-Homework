function city(object) {
    for (let [key, value] of Object.entries(object)) {
        console.log(`${key} -> ${value}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

/**2.	City
Write a function that receives a single parameter – an object, containing five properties:
{ name, area, population, country, postcode }
Loop through all the keys and print them with their values in format: "{key} -> {value}"
 */