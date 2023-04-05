function ladyBugs(input) {
    const range = Number(input.shift());
    const ladyBugs = input.shift().split(' ').map(n => Number(n));
    const field = [];
    for (let i = 0; i < range; i++) {
        field.push(0);
    }

    for (let i = 0; i < ladyBugs.length; i++) {
        if (ladyBugs[i] >= 0 && ladyBugs[i] < field.length)
            field.splice(ladyBugs[i], 1, 1);
    }

    for (const line of input) {
        let [ladyIndex, direction, flyLength] = line.split(' ');
        ladyIndex = Number(ladyIndex);
        flyLength = Number(flyLength);
        const isValid = (ladyIndex >= 0 && ladyIndex < field.length) && field[ladyIndex] > 0;
        if (isValid) {
            field.splice(ladyIndex, 1, 0);
            switch (direction) {
                case 'right': {
                    while (ladyIndex < field.length) {
                        if (field[ladyIndex] === 0) {
                            field.splice(ladyIndex, 1, 1);
                            break;
                        }
                        ladyIndex += flyLength;
                    }
                } break;

                case 'left': {
                    flyLength = -flyLength;
                    while (ladyIndex < field.length) {
                        if (field[ladyIndex] === 0) {
                            field.splice(ladyIndex, 1, 1);
                            break;
                        }
                        ladyIndex += flyLength;
                    }
                } break;
            }
        }
    }
    console.log(field.join(' '));
}
ladyBugs([3, '0 1',
    '0 right 1',
    '2 right 1'
]);

console.log('=====================================================================================');

ladyBugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'
]);

console.log('=====================================================================================');

ladyBugs([5, '3',
    '3 left 2',
    '1 left -2'
]);