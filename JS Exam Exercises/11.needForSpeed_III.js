function needForSpeed_III(input) {
    let data = Object.assign([], input);
    class Car {
        constructor(make, mileage, fuelQty) {
            this.make = make;
            this.mileage = mileage;
            this.fuelQty = fuelQty;
        }
    }

    const carCount = data.shift();
    let allCars = [];

    for (let i = 0; i < carCount; i++) {
        let carData = data.shift().split('|');
        let [make, km, fuel] = carData;
        allCars.push(new Car(make, Number(km), Number(fuel)));
    }

    for (let string of data) {
        string = string.split(' : ');
        const command = string[0];
        if (command === 'Stop') return printResults();
        const make = string[1];
        const values = string.slice(2);

        switch (command) {
            case 'Drive': {
                const distance = Number(values[0]);
                const neededFuel = Number(values[1]);
                drive(make, distance, neededFuel);
            }
                break;

            case 'Refuel': {
                const fuel = Number(values[0]);
                refuel(make, fuel);
            }
                break;

            case 'Revert': {
                const km = Number(values[0]);
                decreaseKm(make, km)
            }
                break;
        }
    }

    function drive(make, distance, neededFuel) {
        for (let car of allCars) {
            let isFound = false;
            if (car.make === make) {
                isFound = true;
                if (car.fuelQty >= neededFuel) {
                    car.mileage += distance;
                    car.fuelQty -= neededFuel;
                    console.log(`${car.make} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);
                    if (car.mileage >= 100000) {
                        console.log(`Time to sell the ${car.make}!`);
                        allCars.splice(allCars.indexOf(car, 1));
                    }
                } else {
                    console.log('Not enough fuel to make that ride');
                }
            }
            if (isFound) break;
        }
    }

    function refuel(make, liters) {
        for (let car of allCars) {
            let isFound = false;
            if (car.make === make) {
                isFound = true;
                const overFill = car.fuelQty + liters > 75;
                if (overFill) liters = 75 - car.fuelQty;
                car.fuelQty += liters;
                console.log(`${car.make} refueled with ${liters} liters`);
            }
            if (isFound) break;
        }
    }

    function decreaseKm(make, km) {
        for (let car of allCars) {
            let isFound = false;
            if (car.make === make) {
                isFound = true;
                car.mileage -= km;
                if (car.mileage < 10000) {
                    car.mileage = 10000;
                } else {
                    console.log(`${car.make} mileage decreased by ${km} kilometers`);
                }
            }
            if (isFound) break;
        }
    }

    function printResults() {
        for (let car of allCars) {
            console.log(`${car.make} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuelQty} lt.`);
        }
    }
}

needForSpeed_III([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

console.log('=============================================================================');
needForSpeed_III([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);


/**Problem 3 - Need for Speed III
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2307#2.

You have just bought the latest and greatest computer game – Need for Seed III. Pick your favorite cars and drive them all you want! We know that you can't wait to start playing.
On the first line of the standard input, you will receive an integer n – the number of cars that you can obtain. On the next n lines, the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:
"{car}|{mileage}|{fuel}"
Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:
•	"Drive : {car} : {distance} : {fuel}":
o	You need to drive the given distance, and you will need the given fuel to do that. If the car doesn't have enough fuel, print: "Not enough fuel to make that ride"
o	If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel, and print: 
"{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
o	You like driving new cars only, so if a car's mileage reaches 100 000 km, remove it from the collection(s) and print: "Time to sell the {car}!"
•	"Refuel : {car} : {fuel}":
o	Refill the tank of your car. 
o	Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is required to fill it up. 
o	Print a message in the following format: "{car} refueled with {fuel} liters"
•	"Revert : {car} : {kilometers}":
o	Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
"{car} mileage decreased by {amount reverted} kilometers"
o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
DO NOT print anything.
Upon receiving the "Stop" command, you need to print all cars in your possession in the following format:
"{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
Input/Constraints
•	The mileage and fuel of the cars will be valid, 32-bit integers, and will never be negative.
•	The fuel and distance amounts in the commands will never be negative.
•	The car names in the commands will always be valid cars in your possession.
Output
•	All the output messages with the appropriate formats are described in the problem description.
 */