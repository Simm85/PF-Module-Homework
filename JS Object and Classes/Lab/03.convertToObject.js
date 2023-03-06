function convertToObject(json) {
    let object = JSON.parse(json);
    for (let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

/**3.Convert to Object
Write a function that receives a string in JSON format and converts it to an object.
Loop through all the keys and print them with their values in format: "{key}: {value}"
 */