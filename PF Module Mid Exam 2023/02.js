function solve(input) {
    let numbers = input.shift().split(' ').map(element => Number(element));

    for (let line of input) {
        let command = '';
        if (line.includes('add to start')) {
            command = 'add to start';
            line = line.replace(command, "");
        } else if (line.includes('find even')) {
            command = 'find even';
            line = line.replace(command, "");
        } else if (line.includes('find odd')) {
            command = 'find odd';
            line = line.replace(command, "");
        } else if (line.includes('remove greater than')) {
            command = 'remove greater than';
            line = line.replace(command, "");
        } else if (line.includes('remove at index')) {
            command = 'remove at index';
            line = line.replace(command, "");
        } else if (line.includes('replace')) {
            command = 'replace';
            line = line.replace(command, "");
        } else {
            command = line;
        }

        let values = line
            .split(' ')
            .filter(element => element != '')
            .map(element => Number(element));

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
    "END"])

console.log('=============================================================');

solve(["1 2 3 10 10 6 4 10",
    "replace 10 1",
    "remove at index 0",
    "add to start 4 2",
    "END"
]);

