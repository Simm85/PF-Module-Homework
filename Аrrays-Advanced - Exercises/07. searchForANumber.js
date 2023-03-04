function searchForANumber(numSequence, actions) {
    let [take, remove, find] = actions;
    let newSequence = [];

    for (let i = 0; i < take; i++) {
        newSequence.push(numSequence[i]);
    }

    newSequence.splice(0, remove);

    let counter = 0;
    newSequence.forEach(number => {
        if (number === find) {
            counter++;
        }
    });

    return console.log(`Number ${find} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);