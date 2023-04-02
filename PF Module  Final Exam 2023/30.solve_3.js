function solve_3(input) {
    let guests = {};
    let unlikedMeals = 0;

    for (let line of input) {
        let [command, name, meal] = line.split('-');
        if (command === 'Stop') {
            for (let key in guests) {
                console.log(`${key}: ${guests[key].join(', ')}`);
            }
            console.log(`Unliked meals: ${unlikedMeals}`);
        };

        switch (command) {
            case 'Like': {
                if (!guests.hasOwnProperty(name)) {
                    guests[name] = [meal];
                } else {
                    if (guests[name].indexOf(meal) === -1) guests[name].push(meal);
                }
            }
                break;

            case 'Dislike': {
                if (guests.hasOwnProperty(name)) {
                    if (guests[name].indexOf(meal) !== -1) {
                        let mealIndex = guests[name].indexOf(meal);
                        guests[name].splice(mealIndex, 1);
                        console.log(`${name} doesn't like the ${meal}.`);
                        unlikedMeals++;
                    } else {
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    }
                } else {
                    console.log(`${name} is not at the party.`);
                }
            }
                break;
        }
    }
}
solve_3(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"])

console.log('============================================================================');

solve_3(["Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"])

console.log('============================================================================');

solve_3(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])
