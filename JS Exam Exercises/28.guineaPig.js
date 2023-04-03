function guineaPig(input) {
    input = input.map(el => Number(el) * 1000);
    let [food, hay, cover, weight] = input;
    let dayCounter = 0;
    for (let i = 0; i < 30; i++) {
        dayCounter++;
        food -= 300;
        if (i > 0) {
            if (i % 2 !== 0) hay -= food - (food * 0.95);
        }

        if (dayCounter % 3 === 0) cover -= weight / 3;

        if (food <= 0 || hay <= 0 || cover <= 0)
            return console.log('Merry must go to the pet store!');
    }
    [food, hay, cover, weight] = [food, hay, cover, weight].map(number => number / 1000);
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
}



guineaPig(["10",
    "5",
    "5.2",
    "1"])

guineaPig(["1",
    "1.5",
    "3",
    "1.5"
])


guineaPig(["9",
    "5",
    "5.2",
    "1"
]);


/**Problem 1 - Guinea Pig
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2031#0.

Merry has a guinea pig named Puppy, that she loves very much. Every month she goes to the nearest pet store and buys him everything he needs – food, hay, and cover.
On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.
Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
Calculate whether the quantity of food, hay, and cover, will be enough for a month.
If Merry runs out of food, hay, or cover, stop the program!
Input
•	On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0]
•	On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0]
•	On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0]
•	On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0]
Output
•	If the food, the hay, and the cover are enough, print:
o	"Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
•	If one of the things is not enough, print:
o	"Merry must go to the pet store!"
The output values must be formatted to the second decimal place!
 */