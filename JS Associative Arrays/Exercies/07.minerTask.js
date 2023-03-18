function minerTask(data) {
    let resources = {};
    let resource = '';
    let quantity = 0;

    for (let i = 0; i < data.length; i++) {
        i % 2 === 0 ? resource = data[i] : quantity = Number(data[i]);
        if (i % 2 !== 0) {
            resources.hasOwnProperty(resource)
                ? resources[resource] += quantity
                : resources[resource] = quantity;
        }
    }

    for (let key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);

console.log('=======================================================================');
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

/**7.	A Miner Task
You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 
Print the resources and their quantities in the format:
{resource} –> {quantity}
The quantities inputs will be in the range [1 … 2 000 000 000].
 */