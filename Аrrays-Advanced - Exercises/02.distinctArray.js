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
    console.log(printArray.join(' '));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);


/* for (let i = 0; i <= numbersArray.length; i++) {

        let currentNumber = numbersArray.shift(numbersArray[i]);
        printArray.push(currentNumber);
        let index = 0;
        let nextNumber = numbersArray[index];
        let notEqual = currentNumber !== nextNumber;


        while (index < numbersArray.length) {
            if (notEqual) {
                printArray.push(nextNumber);
            } 
            index++;
            nextNumber = numbersArray[index];
            notEqual = currentNumber !== nextNumber;
        }
    } */