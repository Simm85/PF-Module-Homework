function adAstra(input) {
    const pattern = /([|#]){1}(?<itemName>[A-Za-z\s]{1,})\1(?<expDate>[0-9\/]{8})\1(?<cal>[\d]{1,9999})\1/gm;
    let foodData = input.map(string => string.matchAll(pattern));
    let totalCals = 0;
    for (const food of foodData) {
        for (const element of food) {
            const foodCal = Number(element.groups['cal']);
            totalCals += foodCal;
        }
    }

    let daysToLive = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${daysToLive} days!`);
    foodData = input.map(string => string.matchAll(pattern));

    for (const food of foodData) {
        for (const element of food) {
            let item = element.groups['itemName'];
            let expDate = element.groups['expDate'];
            let itemCals = element.groups['cal'];
            console.log(`Item: ${item}, Best before: ${expDate}, Nutrition: ${itemCals}`);
        }
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

/**Problem 2 - Ad Astra
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2525#1.

You are an astronaut who just embarked on a mission across the solar system. Since you will be in space for a long time, you have packed a lot of food with you. Create a program, which helps you identify how much food you have left and gives you information about its expiration date.
On the first line of the input, you will be given a text string. You must extract the information about the food and calculate the total calories. 
First, you must extract the food info. It will always follow the same pattern rules:
•	It will be surrounded by "|" or "#" (only one of the two) in the following pattern: 
#{item name}#{expiration date}#{calories}#   or 
|{item name}|{expiration date}|{calories}|
•	The item name will contain only lowercase and uppercase letters and whitespace
•	The expiration date will always follow the pattern: "{day}/{month}/{year}", where the day, month, and year will be exactly two digits long
•	The calories will be an integer between 0-10000
Calculate the total calories of all food items and then determine how many days you can last with the food you have. Keep in mind that you need 2000kcal a day.
Input / Constraints
•	You will receive a single string
Output
•	First, print the number of days you will be able to last with the food you have:
"You have food to last you for: {days} days!"
•	The output for each food item should look like this:
"Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"
 */