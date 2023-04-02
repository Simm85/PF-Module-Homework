function movingTargets(input) {
    let targets = input.shift().split(' ').map(number => Number(number));
    for (let el of input) {
        if (el === 'End') return console.log(targets.join('|'));
        let [command, ...values] = el.split(' ');
        values = values.map(number => Number(number));
        switch (command) {
            case 'Shoot': {
                let index = values[0];
                let power = values[1];
                let target = targets[index];
                if (index >= 0 && index < targets.length) {
                    target -= power;
                    targets.splice(index, 1, target);
                    if (target <= 0)
                        targets.splice(index, 1);
                }
            }
                break;

            case 'Strike': {
                let index = values[0];
                let radius = values[1];
                let isValid = index - radius >= 0 && index + radius < targets.length;
                if (isValid) {
                    let start = index - radius;
                    let delCount = index + radius;
                    targets.splice(start, delCount);
                } else {
                    console.log('Strike missed!');
                }
            }
                break;

            case 'Add': {
                let index = values[0];
                let element = values[1];
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, element);
                } else {
                    console.log('Invalid placement!');
                }
            }
                break;
        }
    }
}
movingTargets(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]);

movingTargets(["1 2 3 4 5",
    "Strike 0 1",
    "End"
]);



/**Problem 3 - Moving Target
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2305#2.

You are at the shooting gallery again, and you need a program that helps you keep track of moving targets. On the first line, you will receive a sequence of targets with their integer values, split by a single space. Then, you will start receiving commands for manipulating the targets until the "End" command. The commands are the following:
•	"Shoot {index} {power}"
o	Shoot the target at the index if it exists by reducing its value by the given power (integer value). 
o	Remove the target if it is shot. A target is considered shot when its value reaches 0.
•	"Add {index} {value}"
o	Insert a target with the received value at the received index if it exists. 
o	If not, print: "Invalid placement!"
•	"Strike {index} {radius}"
o	Remove the target at the given index and the ones before and after it depending on the radius.
o	If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
 Example:  "Strike 2 2"
    {radius}	{radius}	{strikeIndex}	{radius}	{radius}		

•	"End"
o	Print the sequence with targets in the following format and end the program:
"{target1}|{target2}…|{targetn}"
 */