/**4.	Sorting
Write a function that sorts an array of numbers so that the first element is the biggest one,
the second is the smallest one, the third is the second biggest one,
and the fourth is the second smallest one, and so on. 
Print the elements on one row, separated by a single space.
 */

function sorting(input) {
    let data = input.slice();
    data.sort((a, b) => b - a);
    let printData = [];

    while (data.length !== 0) {
        let biggestInteger = data.shift();
        let smallestInteger = data.pop();
        printData.push(biggestInteger, smallestInteger);
    }

    return console.log(printData.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);