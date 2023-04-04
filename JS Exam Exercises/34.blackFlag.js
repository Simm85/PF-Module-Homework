function blackFlag(input) {
    const plunderDays = Number(input[0]);
    const dailyPlunder = Number(input[1]);
    const expectedPlunder = Number(input[2]);
    let totalPlunder = 0;
    let actionDays = 0;
    for (let i = 0; i < plunderDays; i++) {
        totalPlunder += dailyPlunder;
        actionDays++;
        if (actionDays % 3 === 0) totalPlunder += dailyPlunder * 0.5;
        if (actionDays % 5 === 0) totalPlunder -= totalPlunder * 0.3;
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        const percentage = 100 * (totalPlunder / expectedPlunder);
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5",
    "40",
    "100"
]);
console.log('=========================================================================');
blackFlag(["10",
    "20",
    "380"
]);


/**Problem 1 - Black Flag 
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/1773#0.

Pirates are invading the sea, and you're tasked to help them plunder
Create a program that checks if target plunder is reached. First, you will receive how many days the pirating lasts. Then you will receive how much the pirates plunder for a day. Last you will receive the expected plunder at the end.
Calculate how much plunder the pirates manage to gather. Each day they gather the plunder. Keep in mind that they attack more ships every third day and add additional plunder to their total gain, which is 50% of the daily plunder. Every fifth day the pirates encounter a warship, and after the battle, they lose 30% of their total plunder.
If the gained plunder is more or equal to the target, print the following:
"Ahoy! {totalPlunder} plunder gained."
If the gained plunder is less than the target. Calculate the percentage left and print the following:
"Collected only {percentage}% of the plunder."
Both numbers should be formatted to the 2nd decimal place.
Input
•	On the 1st line, you will receive the days of the plunder – an integer number in the range [0…100000]
•	On the 2nd line, you will receive the daily plunder – an integer number in the range [0…50]
•	On the 3rd line, you will receive the expected plunder – a real number in the range [0.0…10000.0]
Output
•	 In the end, print whether the plunder was successful or not, following the format described above.
 */