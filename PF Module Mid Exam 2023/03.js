function solve(input) {
    let products = input.shift().split('|');
    for (let line of input) {
        let [command, ...item] = line.split('%');
        let count = 0;
        if (command === 'Shop!') {
            for (let i = 0; i < products.length; i++) {
                count++;
                console.log(`${count}. ${products[i]}`);
            }
        };
        switch (command) {
            case 'Important': {
                if (products.indexOf(item[0]) === -1) {
                    products.unshift(item[0]);
                } else {
                    products.splice(products.indexOf(item[0]), 1);
                    products.unshift(item[0]);
                }
            } break;

            case 'Add': {
                if (products.indexOf(item[0]) === -1) {
                    products.push(item[0]);
                } else {
                    console.log("The product is already in the list.");
                }
            } break;

            case 'Swap': {
                let item1 = item[0];
                let item2 = item[1];
                let index1 = products.indexOf(item1);
                let index2 = products.indexOf(item2);

                if (products.indexOf(item1) !== -1 && products.indexOf(item2) !== -1) {
                    products.splice(index1, 1, item2);
                    products.splice(index2, 1, item1);
                } else {
                    if (products.indexOf(item1) === -1) {
                        console.log(`Product ${item1} missing!`);
                    } else {
                        console.log(`Product ${item2} missing!`);
                    }
                }

            } break;

            case 'Remove': {
                if (products.indexOf(item[0]) !== -1) {
                    products.splice(products.indexOf(item[0]), 1);
                } else {
                    console.log(`Product ${item[0]} isn't in the list.`);
                }
            } break;

            case 'Reversed': {
                products.reverse();
            } break;
        }
    }
}
solve(["eggs|milk|bread|fish",
    "Important%bread",
    "Swap%eggs%tomato",
    "Shop!"])

console.log('==============================================================');

solve(["apple|cheese|salt|bananas",
    "Remove%cheese",
    "Swap%salt%bananas",
    "Shop!"])

console.log('==============================================================');

solve(["kiwi|paper|coffee",
    "Add%coffee",
    "Important%bread",
    "Shop!"])
