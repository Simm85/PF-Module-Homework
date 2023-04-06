function solve(input) {
    let products = input.shift().split('|');
    for (let line of input) {
        let [command, ...item] = line.split('%');

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
                products.indexOf(item[0]) === -1
                    ? products.push(item[0])
                    : console.log("The product is already in the list.");
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
                    products.indexOf(item1) === -1
                        ? console.log(`Product ${item1} missing!`)
                        : console.log(`Product ${item2} missing!`);
                }
            } break;

            case 'Remove': {
                products.indexOf(item[0]) !== -1
                    ? products.splice(products.indexOf(item[0]), 1)
                    : console.log(`Product ${item[0]} isn't in the list.`);
            } break;

            case 'Reversed': {
                products.reverse();
            } break;

            case 'Shop!': {
                let count = 0;
                for (let i = 0; i < products.length; i++) {
                    count++;
                    console.log(`${count}. ${products[i]}`);
                }
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
