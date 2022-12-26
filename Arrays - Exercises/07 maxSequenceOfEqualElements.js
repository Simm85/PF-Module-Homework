function maxSequenceOfEqualElements(array) {
    let longestSequence = new Array();
    let currentSequence = new Array();
    

    for (let i = 0; i < array.length; i++) {

        let charA = array[i];
        currentSequence = [charA];

        for (let j = i + 1; j < array.length; j++) {
            let charB = array[j];

            if (charA === charB) {
                currentSequence.push(charB);
            } else {
                break;
            }
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence;
        }
    }

    console.log(longestSequence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

/** Max Sequence of Equal Elements
Write a function that finds the longest sequence of equal elements in an array of numbers. 
If several longest sequences exist, print the leftmost one. */