function numbers(input) {
    let data = input.slice();
    let numbersArray = data.slice(0, 1);
    let commandsArray = data.slice(1);
    let index = 0;
    let command = '';

    numbersArray = String(numbersArray).split(' ');

    while (command !== 'Finish') {
        commandsArray[index] = commandsArray[index].split(' ');
        command = commandsArray[index][0];
        let firstNumber = commandsArray[index][1];
        let secondNumber = commandsArray[index][2];

        switch (command) {
            case 'Add': numbersArray.push(firstNumber);
                break;

            case 'Remove':
                for (let i = 0; i < numbersArray.length; i++) {
                    if (firstNumber === numbersArray[i]) numbersArray.splice(i, 1);
                }
                break;

            case 'Replace':
                numbersArray.splice(commandsArray[index].indexOf(firstNumber), 1, secondNumber);
                break;

            case 'Collapse':
                for (let i = 0; i < numbersArray.length; i++) {
                    if (firstNumber > numbersArray[i]) numbersArray.splice(i, 1);
                }
                break;
        }
        index++;
    }
    
    console.log(numbersArray.join(' '));
}
numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);

numbers(["1 20 -1 10", "Collapse 8", "Finish"]);

numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);

