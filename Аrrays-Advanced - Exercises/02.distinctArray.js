/**2.	Distinct Array
You will be given an array of integer numbers on the first line of the input.
Remove all repeating elements from the array. 
Print the result elements separated by a single space.
 */

function distinctArray(array) {
    let numbersArray = array.slice();
    let printArray = [];

    while (numbersArray.length !== 0) {
        let currentNumber = numbersArray.shift();
        for (let j = 0; j < numbersArray.length; j++) {
            let testNumber = numbersArray[j];
            if (currentNumber === testNumber) {
                numbersArray.splice(j, 1);
                j -= 1;
            }
        }
        printArray.push(currentNumber);
    }
   return console.log(printArray.join(' '));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);


