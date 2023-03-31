function numbers(input) {
    let numbers = input
        .slice()
        .split(' ')
        .map(number => Number(number));

    let avgNumber = 0;
    numbers.reduce((result, number) => {
        result += number
        return avgNumber = result;
    }, 0);
    avgNumber /= numbers.length;
    if (!Number.isInteger(avgNumber)) avgNumber = Number(avgNumber.toFixed(2));

    let top_5_Numbers = [];
    let greaterNumbers = [];

    numbers.forEach(number => {
        if (number > avgNumber) greaterNumbers.push(number);
    });

    greaterNumbers.sort((a, b) => b - a);

    greaterNumbers.forEach(number => {
        if (top_5_Numbers.length < 5) top_5_Numbers.push(number);
    });

    top_5_Numbers.length === 0
        ? console.log('No')
        : console.log(top_5_Numbers.join(' '));
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');

/**Problem 3 - Numbers
Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.
Input
•	Read from the console a single line holding space-separated integers.
Output
•	Print the above-described numbers on a single line, space-separated. 
•	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
•	Print "No" if no numbers hold the above property.
Constraints
•	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
•	The count of numbers is in the range [1…10 000].
 */