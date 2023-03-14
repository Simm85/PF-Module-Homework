function piccolo(data) {
    let dataCopy = Object.assign([], data);
    let cars = new Set();
    let command, regNumber;
    
    dataCopy = dataCopy.map(el => el.split(', '));
    for (data of dataCopy) {
        [command, regNumber] = data;
        switch (command) {
            case 'IN': cars.add(regNumber); break;
            case 'OUT': cars.delete(regNumber); break;
        }
    }

    if (cars.size === 0) return console.log('Parking Lot is Empty');
    let sortRegNumbers = Array
        .from(cars)
        .sort((a, b) => a.localeCompare(b))
        .join('\n');
    console.log(sortRegNumbers);
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

/**3.	Piccolo
Write a function that:
•	Records a car number for every car that enters the parking lot
•	Removes a car number when the car goes out
•	Input will be an array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number.
If the parking lot is empty, print: "Parking Lot is Empty".
 */