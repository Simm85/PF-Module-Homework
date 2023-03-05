/***Array Manipulator
Write a function that receives an array of integers and an array of string commands and executes them over the array. The commands are as follows:
•	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
•	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
•	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
•	remove <index> – removes the element at the specified index.
•	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
•	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
•	print – stop receiving more commands and print the last state of the array in the following format:
         `[ {element1}, {element2}, …elementN} ]`
  Note: The elements in the array must be joined by comma and space (, ).
 */

function arrayManipulator(numbersSequence, commandsSequence) {
    for (let element of commandsSequence) {
        let command = element.split(' ');
        let action = command[0];
        let details = [];

        for (let i = 1; i < command.length; i++) {
            details.push(Number(command[i])); // Pushing it as 'Number();' for proper behaviour with 'indexOf();' later.
        }

        switch (action) {
            case 'add':
                numbersSequence.splice(details[0], 0, details[1]);
                break;


            case 'addMany':
                for (let i = 1; i < details.length; i++) {
                    numbersSequence.splice(details[0], 0, details[i]);
                    details[0] += 1;
                }
                break;


            case 'contains':
                console.log(numbersSequence.indexOf(details[0]));
                break;


            case 'remove':
                numbersSequence.splice(details[0], 1);
                break;


            case 'shift':
                let rotationCount = Math.abs(details[0]);
                for (let i = 0; i < rotationCount; i++) {
                    let element = numbersSequence.shift();
                    numbersSequence.push(element);
                }
                break;


            case 'sumPairs':
                let bufferSequence = [];
                while (numbersSequence.length !== 0) {
                    let num1 = numbersSequence.shift();
                    let num2 = numbersSequence.shift();
                    if (num2 === undefined) num2 = 0;
                    bufferSequence.push(num1 + num2);
                }
                numbersSequence = Array.from(bufferSequence);
                break;


            case 'print': return console.log(`[ ${numbersSequence.join(', ')} ]`);
                break;
        }
    }
}
//arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
//arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift -1', 'print']);
arrayManipulator([2, 2, 4, 2,], ["add 1 4", "sumPairs", "print"]);