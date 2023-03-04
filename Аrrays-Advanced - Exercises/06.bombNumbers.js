function bombNumbers(array1, array2) {
    let numbersArray = Array.from(array1);
    let bombArray = Array.from(array2);
    let bomb = bombArray[0];
    let bombPower = bombArray[1];
    let startPoint = 0;
    let deleteCount = 0;
    let bombPosition = 0;
    let result = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] === bomb) {
            bombPosition = numbersArray.indexOf(numbersArray[i]);
            startPoint = bombPosition - bombPower;
            if (startPoint < 0) startPoint = 0;
            deleteCount = bombPower * 2 + 1;
            numbersArray.splice(startPoint, deleteCount);
            i = 0;
        }
    }
    numbersArray.length > 0 ? numbersArray.forEach(number => result += number) : result = 0;
    return console.log(result);
}
//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);