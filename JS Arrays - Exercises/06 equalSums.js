function equalSums(array) {
    let midNumber = new Array();
    let command = false;

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        let indexOfCurrentNumber = i;

        if (i === 0 ||
            i === array.length - 1 ||
            array.length === 1
        ) {
            leftSum += 0;
            rightSum += 0;
        }

        for (let j = 0; j < indexOfCurrentNumber; j++) {
            leftSum += array[j];
        }

        for (let k = indexOfCurrentNumber + 1; k < array.length; k++) {
            rightSum += array[k];
        }

        if (leftSum === rightSum) {
            midNumber.push(indexOfCurrentNumber);
            command = true;
        }
    }

    if (command) {
        console.log(midNumber.join(' '));
    } else {
        console.log('no');
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalSums([1, 2, 3, 3]);
equalSums([1]);

/** Equal Sums
Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right. 
If there are NO elements to the left/right, their sum is 0. 
Print the index that satisfies the required condition or "no" if there is no such index. */
