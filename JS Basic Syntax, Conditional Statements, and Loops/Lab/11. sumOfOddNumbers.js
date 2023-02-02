function sumOfOddNumbers(n) {
    let sum = 0;
    let odd = 1;

    while (n > 0) {
        if (odd % 2 !== 0) {
            console.log(odd);
            sum += odd;
            n--;
        }
        odd++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);