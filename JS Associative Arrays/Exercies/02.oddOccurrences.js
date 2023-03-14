function oddOccurrences(data) {
    let wordsArray = data.split(' ')
        .map(word => word.toLowerCase());

    let setOfWords = new Map();

    for (let word of wordsArray) {
        let counter = 1;
        if (setOfWords.has(word)) counter = setOfWords.get(word) + 1;
        setOfWords.set(word, counter);
    }

    let nameConcat = '';

    for (let word of setOfWords) {
       let [name, count] = word;
        if (count % 2 !== 0) nameConcat += ' ' + name;
    }

    console.log(nameConcat.trim());
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

/**Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
The input comes as a single string. The words will be separated by a single space.
 */