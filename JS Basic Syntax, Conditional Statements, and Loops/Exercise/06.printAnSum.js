function printAndSum(num1, num2) {
    let sum = 0;
    let arrNums = [];

    for (let i = num1; i <= num2; i++) {
        arrNums.push(i);
        sum += i;
    }
    console.log(`${arrNums.join(' ')}\nSum: ${sum}`);
}
printAndSum(0, 26);