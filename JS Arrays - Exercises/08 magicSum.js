function magicSum(array, givenNumber) {
    let uniquePairs = [];

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {
            let equalSum = array[i] + array[j] === givenNumber;

            if (equalSum) {
                uniquePairs.push(array[i], ' ', array[j], '\n');
            } else {
                continue;
            }
        }
    }
    console.log(uniquePairs.join(''));
}
magicSum([1, 7, 6, 2, 19, 23], 8);

/**Write a function, which prints all unique pairs in an array of integers
  whose sum is equal to a given number.  */