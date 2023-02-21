function memoryGame(input) {
    let data = input.slice();
    let elementsSeq = [];
    let indexSeq = [];

    for (let i = 0; i < data.length; i++) {
        i === 0
            ? elementsSeq = data[i].split(' ')
            : indexSeq.push(data[i]);
    }

    let i = 0;
    let cmd = indexSeq[i];
    let moves = 0;

    while (cmd !== 'end') {
        let indexPair = indexSeq[i].split(' ');
        moves++;

        for (let j = 0; j < 1; j++) {
            let a = Number(indexPair[j]);
            let b = Number(indexPair[j + 1]);
            let el_1 = elementsSeq[a];
            let el_2 = elementsSeq[b];

            if (a === b || a < 0 || b < 0 || a >= elementsSeq.length || b >= elementsSeq.length) {
                let middlePlace = Math.trunc(elementsSeq.length / 2);
                elementsSeq.splice(middlePlace, 0, `-${moves}a`, `-${moves}a`);
                console.log('Invalid input! Adding additional elements to the board');

            } else if (el_1 === el_2) {
                elementsSeq.splice(elementsSeq.indexOf(el_1), 1);
                elementsSeq.splice(elementsSeq.indexOf(el_2), 1);
                console.log(`Congrats! You have found matching elements - ${el_1}!`);
                if (elementsSeq.length === 0) return console.log(`You have won in ${moves} turns!`);

            } else if (el_1 !== el_2) console.log('Try again!');
        }

        i++;
        cmd = indexSeq[i];
        if (cmd === 'end' && elementsSeq.length > 0) console.log(`Sorry you lose :(\n${elementsSeq.join(' ')}`);
    }
}



function solve(input) {

    const numbers = input

        .shift()

        .trim()

        .split(' ');



    let moves = 0;



    while (numbers.length > 1 && input[0].toLowerCase() !== 'end') {

        let [index1, index2] = input

            .shift()

            .split(' ');

        index1 = Number(index1);

        index2 = Number(index2);



        moves++;



        if (index1 < 0

            || index1 >= numbers.length

            || index1 === index2

            || index2 < 0

            || index2 >= numbers.length) {

            const index = Math.trunc(numbers.length / 2);

            const symbol = '-' + moves + 'a';

            numbers.splice(index, 0, symbol, symbol);

            console.log('Invalid input! Adding additional elements to the board')

        }

        else {

            const num1 = numbers[index1];

            const num2 = numbers[index2];

            if (num1 === num2) {

                numbers.splice(index1, 1);

                index2 = numbers.indexOf(num2);

                numbers.splice(index2, 1);

                console.log(`Congrats! You have found matching elements - ${num1}!`);

            } else if (num1 !== num2) {

                console.log('Try again!');

            }

        }

    }



    if (numbers.length === 0 || numbers.length === 1) {

        console.log(`You have won in ${moves} turns!`);

    } else {

        console.log(`Sorry you lose :(`);

        console.log(`${numbers.join(' ')}`);

    }

}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);

//memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", '0 5', "end"]);

//memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);