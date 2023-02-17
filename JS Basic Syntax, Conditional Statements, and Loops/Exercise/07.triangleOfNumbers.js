function triangleOfNumbers(n) {
    let counter = 1;

    while (counter <= n) {
        let print = '';
        for (let i = 1; i <= counter; i++) {
            print += `${counter} `;
        }
        console.log(print);
        counter++;
    }
}
triangleOfNumbers(6);