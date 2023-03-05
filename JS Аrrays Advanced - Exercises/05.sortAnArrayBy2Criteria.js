/**5.	 Sort an Array by 2 Criteria
Write a function that orders an array of strings, by their length in ascending order as primary criteria,
and by alphabetical value in ascending order as second criteria.
The comparison should be case-insensitive.
The input comes as an array of strings.
The output is the ordered array of strings, each on a separate line.
 */

function sortAnArrayBy2Criteria(input) {
    let data = Array.from(input);
    data.sort((element1, element2) => {
        if (element1.length - element2.length === 0) {
            return element1.localeCompare(element2);
        }
        return element1.length - element2.length;
    });
    return console.log(data.join('\n'));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('----------------------');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('----------------------');
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);