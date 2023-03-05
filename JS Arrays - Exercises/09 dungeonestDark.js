function dungeonestDark(inputData) {
    let rooms = inputData[0];
    let initHealth = 100;
    let initCoins = 0;
    let foundCoins = 0;
    let enemyKind = '';
    let enemyDamage = 0;
    let firstItem = '';
    let secondItem = 0;
    let isSecondItem = false;
    let bestRoom = 0;

    for (let i = 0; i < rooms.length; i++) {
        let itemSeparator = rooms[i] === ' ';
        let nextRoomDoor = rooms[i] === '|';

        if (!itemSeparator && rooms[i] != Number(rooms[i])) {
            firstItem += rooms[i];
        } else {
            isSecondItem = true;
        }

        while (isSecondItem) {

            if (rooms[i] !== ' ' && rooms[i] == Number(rooms[i]) || rooms[i] == '.') {
                secondItem += rooms[i];
            }

            i++;

            let lastIndex = i > rooms.length - 1;
            if (lastIndex) break;

            nextRoomDoor = rooms[i] === '|';
            if (nextRoomDoor) {
                isSecondItem = false;
                bestRoom++;
            }
        }

        secondItem = Number(secondItem);

        if (nextRoomDoor || i === rooms.length) {
            switch (firstItem) {
                case 'potion':

                    let foundHealth = secondItem;
                    initHealth += foundHealth;

                    if (initHealth > 100) {

                        let wasteHealth = 0;
                        for (let i = initHealth; i > 100; i--) {
                            wasteHealth++;
                        }
                        foundHealth -= wasteHealth;
                        initHealth -= wasteHealth;
                    }

                    console.log(`You healed for ${foundHealth} hp.`);
                    console.log(`Current health: ${initHealth} hp.`);
                    break;

                case 'chest':

                    foundCoins = secondItem;
                    initCoins += foundCoins;
                    console.log(`You found ${foundCoins} coins.`);
                    break;

                default:

                    enemyKind = firstItem;
                    enemyDamage = secondItem;
                    initHealth -= enemyDamage;

                    if (initHealth > 0) {
                        console.log(`You slayed ${enemyKind}.`);
                    } else {
                        console.log(`You died! Killed by ${enemyKind}.`);
                        console.log(`Best room: ${bestRoom}`);
                        return;
                    }
                    break;
            }

            enemyKind = '';
            firstItem = '';
            secondItem = 0;
        }
    }

    console.log(`You've made it!\nCoins: ${initCoins}\nHealth: ${initHealth}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

/** Dungeonest Dark!!!
As a young adventurer, you seek gold and glory in the darkest dungeons there are.
You have initial health 100 and initial coins 0. You will be given a string, representing the dungeon's rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"
Each room contains - an item or a monster; and a number. They are separated by a single space.
 ("item/monster number").
•	If the first part is "potion": 
o	You are healed with the number in the second part. However, your health cannot exceed your initial health (100). 
o	Print: `You healed for {healing-number} hp.`
o	After that, print your current health: `Current health: {number} hp.`
•	If the first part is "chest": 
o	You have found some coins, the number in the second part. 
o	Print: `You found {coins} coins.`
•	In any other case, you are facing a monster, you are going to fight. 
The second part of the room contains the attack of the monster, and the first the monster's name. You should remove the monster's attack from your health. 
o	If you are not dead (health > 0) you have slain the monster, and you should print: 
                                   `You slayed {monster-name}.`
o	If you have died, print: `You died! Killed by {monster-name}.` and your quest is over. 
Print the best room you`ve to manage to reach: `Best room: {room}`.
•	If you managed to go through all the rooms in the dungeon, print on the next three lines: 
"You've made it!"
 "Coins: {coins}"
 "Health: {health}"
Input
You receive an array with one element- string, representing the dungeon's rooms, separated with '|' (vertical bar): ["room1|room2|room3…"].
Output
Print the corresponding messages, described above.
 */

function dungeonDark(arr) {
    let dungen = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let counterRooms = 0;
    let allCoins = 0;

    for (let i = 0; i < dungen.length; i++) {
        let currentRoom = dungen[i].split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]); // Може още тук да го направим число
        counterRooms++;

        if (command === 'potion') {
            //Коригирана проверка за здравето
            if (health + num > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);


        } else if (command === 'chest') {
            coins = Number(num);
            allCoins += Number(num);
            console.log(`You found ${coins} coins.`);

        } else {
            health -= Number(num);
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${counterRooms}`);
                //Може направо да прекъснем програмата
                return;
            }

        }
    }
    // Като използваме return проврката се обесмисля
    console.log(`You've made it!`);
    console.log(`Coins: ${allCoins}`);
    console.log(`Health: ${health}`);
}
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

//dungeonDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);