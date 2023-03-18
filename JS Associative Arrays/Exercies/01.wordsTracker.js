function wordsTracker(data) {
    let wordsArray = Object.assign([], data);
    let occurrences = {};
    let words = wordsArray.shift().split(' ');
    words.forEach(word => occurrences[word] = 0);

    for (let testWord of wordsArray) {
        for (let key in occurrences) {
            if (testWord === key) occurrences[key] += 1;
        }
    }

    wordsArray = [];

    for (let key of Object.entries(occurrences)) {
        wordsArray.push(key);
    }

    wordsArray
        .sort((a, b) => b[1] - a[1])
        .forEach(array => console.log(`${array[0]} - ${array[1]}`));
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
    'the', 'occurrences', 'of', 'the', 'words', 'this', 'and',
    'sentence', 'because', 'this', 'is', 'your', 'task']);

/**Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.
Print for each word how many times it occurs. The words should be sorted by count in descending.
 */


for (let data of companyData) {
    let [brand, employeeId] = data.split(' -> ');
    if (company.has(brand)) {
        employeeId += ` ${company.get(brand)}`;
    }
    company.set(brand, employeeId);
}

let sorted = Array.from(company).sort((a, b) => a[0].localeCompare(b[0]));

for (let array of sorted) {
    let key = array[0];
    let value = array[1].split(' ');
    let filteredValues = [];

    for (let el of value) {
        if (filteredValues.indexOf(el) === -1) filteredValues.push(el);
    }

    console.log(key);
    filteredValues.forEach(value => console.log(`-- ${value}`));
}
