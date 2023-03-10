function makeADictionary(input) {
    let jsonData = Array.from(input).map(element => JSON.parse(element));

    class Dictionary {
        constructor(term, description) {
            this.term = term;
            this.description = description;
        }
    }

    let buffArray = [];
    jsonData.forEach(element => buffArray.push(Object.entries(element)));

    let dictionary = [];
    let term, description;
    for (let element of buffArray) {

        for (let items of element) {
            [term, description] = items;
        }

        if (dictionary.length > 0) {
            for (let object of dictionary) {
                for (let i = 0; i < dictionary.length; i++) {
                    if (object.term === term) dictionary.splice(dictionary.indexOf(object), 1);
                    break;
                }
            }
        }
        dictionary.push(new Dictionary(term, description));
    }

    dictionary.sort((a, b) => {
        if (a.term < b.term) return -1;
        if (a.term > b.term) return 1;
        return 0;
    });

    dictionary.forEach(object => console.log(`Term: ${object.term} => Definition: ${object.description}`));
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Coffee":"new one cup of cofee."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);

/**6.	Make a Dictionary
You will receive an array with strings in the form of JSON's. 
You have to parse these strings and combine them into one object. Every string from the array will hold terms and a description. If you receive the same term twice, replace it with the new definition.
Print every term and definition in that dictionary on new line in format:
`Term: ${term} => Definition: ${definition}`
Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.
 */