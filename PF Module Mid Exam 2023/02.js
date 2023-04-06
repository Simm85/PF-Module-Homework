function solve(input) {
    let numbers = input.shift().split(' ').map(element => Number(element));
    let numPattern = /[\d]+/gm;
    let charPattern = /[^\d\s]+/gm;

    for (let line of input) {
        let command = line.match(charPattern).join(' ');
        let values = line.match(numPattern);
        if (values !== null) values = values.join(' ').split(' ').map(element => Number(element));

        switch (command) {
            case 'add to start': {
                values.reverse();
                values.forEach(element => numbers.unshift(element));
            } break;

            case 'remove greater than': {
                numbers = numbers.filter(number => values[0] > number);
            } break;

            case 'replace': {
                let number = values[0];
                let replacement = values[1];
                if (numbers.indexOf(number) > -1) numbers.splice(numbers.indexOf(number), 1, replacement);
            } break;

            case 'remove at index': {
                let index = values[0];
                if (index >= 0 && index < numbers.length) numbers.splice(index, 1);
            } break;

            case 'find even': {
                let ints = numbers.filter(number => number % 2 === 0);
                console.log(ints.join(' '));
            } break;

            case 'find odd': {
                let ints = numbers.filter(number => number % 2 !== 0);
                console.log(ints.join(' '));
            } break;

            case 'END': {
                console.log(numbers.join(', '));
            } break;
        }
    }
}

solve(["1 2 3 10 10 6 4 10",
    "add to start 1 2 3",
    "remove greater than 5",
    "find even",
    "END"]);

console.log('=============================================================');

solve(["1 2 3 10 10 6 4 10",
    "replace 10 1",
    "remove at index 0",
    "add to start 4 2",
    "END"
]);

console.log('==============================================================');

solve(["1 2 3 10 10 6 4 10",
    "find odd",
    "replace 4 1",
    "remove greater than 5",
    "END"
]);
