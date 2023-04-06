function solve(input) {
    let tripDays = Number(input.shift());
    let budget = Number(input.shift());
    let peopleCount = Number(input.shift());
    let fuelPrice = Number(input.shift());
    let foodExpenses = Number(input.shift());
    let roomPrice = Number(input.shift());

    if (peopleCount > 10) roomPrice -= roomPrice * 0.25;
    foodExpenses *= peopleCount * tripDays;
    let accommodation = peopleCount * roomPrice * tripDays;
    let expenses = foodExpenses + accommodation;
    let money = 0;
    let dayCount = 0;

    for (let i = 0; i < tripDays; i++) {
        let dailyKm = Number(input[i]);
        expenses += dailyKm * fuelPrice;
        dayCount++;
        if (dayCount % 3 === 0) expenses += expenses * 0.4;
        if (dayCount % 5 === 0) expenses += expenses * 0.4;
        if (dayCount % 7 === 0) expenses -= expenses / peopleCount;
        if (expenses > budget) {
            money = expenses - budget;
            console.log(`Not enough money to continue the trip. You need ${money.toFixed(2)}$ more.`);
            return;
        }
    }

    money = budget - expenses;
    console.log(`You have reached the destination. You have ${money.toFixed(2)}$ budget left.`);
}
solve(["7",
    "12000",
    "5",
    "1.5",
    "10",
    "20",
    "512",
    "318",
    "202",
    "154",
    "222",
    "108",
    "123"
]);

solve(["10",
    "20500",
    "11",
    "1.2",
    "8",
    "13",
    "100",
    "150",
    "500",
    "400",
    "600",
    "130",
    "300",
    "350",
    "200",
    "300"
]);
