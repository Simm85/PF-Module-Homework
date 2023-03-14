function wordOccurrences(data) {
    let words = new Map();

    for (let word of data) {
        let counter = 1;
        if (words.has(word)) {
            counter = words.get(word);
            counter++;
        }
        words.set(word, counter);
    }

    let arrayOfWords = [];

    for (let word of words) {
        arrayOfWords.push(word);
    }

    arrayOfWords.sort((a, b) => b[1] - a[1]);
    arrayOfWords.forEach(array => console.log(`${array[0]} -> ${array[1]} times`));
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And", "finally", "the",
    "third", "sentence"]);

/**6.	Word Occurrences
Write a function that counts the times each word occurs in a text.
Print the words sorted by count in descending order.
The input comes as an array of strings.
*/

