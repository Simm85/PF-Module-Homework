function treasureHunt(input) {
    let initLoot = input.shift().split('|');
    for (const line of input) {
        let [command, ...values] = line.split(' ');
        switch (command) {
            case 'Loot':
                values.forEach(value => {
                    if (initLoot.indexOf(value) === -1) initLoot.unshift(value);
                });
                break;

            case 'Drop':
                const index = Number(values[0]);
                if (index >= 0 && index < initLoot.length) {
                    const loot = initLoot[index];
                    initLoot.splice(index, 1);
                    initLoot.push(loot);
                }
                break;

            case 'Steal':
                let stealCount = Number(values[0]);
                if (stealCount >= initLoot.length) stealCount = initLoot.length;
                let stolenItems = [];
                for (let i = 0; i < stealCount; i++) {
                    stolenItems.unshift(initLoot.pop());
                }
                console.log(stolenItems.join(', '));
                break;

            case 'Yohoho!':
                initLoot.length === 0
                    ? console.log("Failed treasure hunt.")
                    : console.log(`Average treasure gain: ${avgTreasureGain(initLoot)} pirate credits.`);
                break;
        }
    }
    function avgTreasureGain(initLoot) {
        let sum = 0;
        let lootCount = 0;
        for (const loot of initLoot) {
            lootCount++;
            sum += loot.length;
        }
        return (sum / lootCount).toFixed(2);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]);
console.log('================================================================================================');
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 10",
    "Yohoho!"
]);


/**Problem 2 - Treasure Hunt
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/1773#1.

The pirates need to carry a treasure chest safely back to the ship, looting along the way.
Create a program that manages the state of the treasure chest along the way. On the first line, you will receive the initial loot of the treasure chest, which is a string of items separated by a "|".
"{loot1}|{loot2}|{loot3} … {lootn}"
The following lines represent commands until "Yohoho!" which ends the treasure hunt:
•	"Loot {item1} {item2}…{itemn}":
o	Pick up treasure loot along the way. Insert the items at the beginning of the chest. 
o	If an item is already contained, don't insert it.
•	"Drop {index}":
o	Remove the loot at the given position and add it at the end of the treasure chest. 
o	If the index is invalid, skip the command.
•	"Steal {count}":
o	Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are. 
o	Print the stolen items separated by ", ":
"{item1}, {item2}, {item3} … {itemn}"
In the end, output the average treasure gain, which is the sum of all treasure items length divided by the count of all items inside the chest formatted to the second decimal point:
"Average treasure gain: {averageGain} pirate credits."
If the chest is empty, print the following message:
"Failed treasure hunt."
Input
•	On the 1st line, you are going to receive the initial treasure chest (loot separated by "|")
•	On the following lines, until "Yohoho!", you will be receiving commands.
Output
•	Print the output in the format described above.
Constraints
•	The loot items will be strings containing any ASCII code.
•	The indexes will be integers in the range [-200…200]
•	The count will be an integer in the range [1….100]
 */