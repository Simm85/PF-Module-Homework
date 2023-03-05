function commonElements(input_1, input_2) {
    const array_1 = input_1;
    const array_2 = input_2;
    let parity = '';

    for (let i = 0; i < array_1.length; i++) {
        let a = array_1[i];

        for (let j = 0; j < array_2.length; j++) {
            let b = array_2[j];

            if (a === b) {
                parity += b + '\n';
            }
        }
    }
    console.log(parity);
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);



/** On the first line print the newly modified array,
 *  on the second line print the sum of numbers from the original array,
 *  on the third line print the sum of numbers from the modified array.*/