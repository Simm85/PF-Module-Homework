function shootForWin(input) {
    let data = Array.from(input);
    let targets = data.shift().split(' ').map(number => Number(number));
    let shotTargets = 0;
    let i = 0;
    let element = data[i];

    while (element !== 'End') {
        let index = Number(element);
        if (index < targets.length) {
            let currentTarget = targets[index];
            shotTargets++;
            targets.splice(index, 1);
            targets = targets.map(n => {
                if (n > currentTarget && n !== -1) {
                    return n -= currentTarget;
                } else if (n <= currentTarget && n !== -1) {
                    return n += currentTarget;
                } else {
                    return n = -1;
                }
            });
            targets.splice(index, 0, currentTarget = -1);
        }
        i++;
        element = data[i];
    }
    return console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}
shootForWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]);

shootForWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]);



/**Problem 2 - Shoot for the Win
Write a program that helps you keep track of your shot targets. You will receive a sequence with integers, separated by a single space, representing targets and their value. Afterward, you will be receiving indices until the "End" command is given, and you need to print the targets and the count of shot targets.
Every time you receive an index, you need to shoot the target on that index, if it is possible. 
Every time you shoot a target, its value becomes -1, and it is considered shot. Along with that, you also need to:
•	Reduce all the other targets, which have greater values than your current target, with its value. 
•	Increase all the other targets, which have less than or equal value to the shot target, with its value.
Keep in mind that you can't shoot a target, which is already shot. You also can't increase or reduce a target, which is considered shot.
When you receive the "End" command, print the targets in their current state and the count of shot targets in the following format:
"Shot targets: {count} -> {target1} {target2}… {targetn}"
Input / Constraints
•	On the first line of input, you will receive a sequence of integers, separated by a single space – the targets sequence.
•	On the following lines, until the "End" command, you be receiving integers each on a single line – the index of the target to be shot.
Output
•	The format of the output is described above in the problem description.
 */