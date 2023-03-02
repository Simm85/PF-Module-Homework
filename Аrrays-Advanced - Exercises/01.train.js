function train(input) {
    let data = input.slice();
    let availableWagons = data.shift(data[0]).split(' ');
    let wagonCapacity = data.shift(data[1]);
    let addWagon = [];
    let findPlace = [];

    for (let element of data) {
        element.includes('Add') ? addWagon.push(element.split(' ')) : findPlace.push(element);
    }

    // Adding wagons.
    for (let i = 0; i < addWagon.length; i++) {
        for (let element of addWagon[i]) {
            if (element == Number(element)) availableWagons.push(element);
        }
    }

    // Converting data type from a string to  a number.
    availableWagons = availableWagons.map(element => element = Number(element));
    findPlace = findPlace.map(element => element = Number(element));
    wagonCapacity = Number(wagonCapacity);


    // Sitting passangers in free wagons.
    for (let i = 0; i < findPlace.length; i++) {
        for (let j = 0; j < availableWagons.length; j++) {
            let isSittingPossible = availableWagons[j] + findPlace[i] <= wagonCapacity;
            if (isSittingPossible) {
                availableWagons[j] += findPlace[i];
                break;
            } else {
                continue;
            }
        }
    }
    
    // Print final state of all Wagons.
    console.log(availableWagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);