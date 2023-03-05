function mergeArrays(array_1, array_2) {
    let array_3 = new Array();
    let elementsSum = 0;
    let elemntsConcatination = '';

    for (let j = 0; j < array_2.length; j++) {
        let arr_1Element = array_1[j];
        let arr_2Element = array_2[j];

        if (j % 2 === 0) {
            arr_1Element = Number(array_1[j]);
            arr_2Element = Number(array_2[j]);
            elementsSum = arr_1Element + arr_2Element;
            array_3.push(elementsSum);

        } else {
            elemntsConcatination = arr_1Element + arr_2Element;
            array_3.push(elemntsConcatination);
        }
    }
    console.log(array_3.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);

/** Merge Arrays
Write a function, which receives two string arrays and merges them into a third array.  
•	If the index of the element is even, add into the third array the sum of both elements at that index
•	If the index of the element is odd, add the concatenation of both elements at that index
Input
As input, you will receive two string arrays (with equal length).
Output
As output, you should print the resulting third array, each element separated by " - ".
*/