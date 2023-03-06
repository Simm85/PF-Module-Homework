function towns(data) {
    let newData = Array.from(data);

    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    let towns = [];

    for (let item of newData) {
        item = item.split(' | ');
        let [town, latitude, longitude] = item;
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        towns.push(new Town(town, latitude, longitude));
    }

    for (let item of towns) {
        item = JSON.stringify(item);
        console.log(JSON.parse(item));
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);

/**2.	Towns
You’re tasked to create and print objects from a text table. 
You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!
 */