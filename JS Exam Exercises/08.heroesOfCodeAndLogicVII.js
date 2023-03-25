function heroesOfCodeAndLogicVII(input) {
    let data = input.slice();
    let heroesCount = Number(data[0]);
    let heroes = {};

    for (let i = 1; i <= heroesCount; i++) {
        let [name, HP, MP] = data[i].split(' ');
        HP = Number(HP);
        MP = Number(MP);
        if (!heroes.hasOwnProperty(name)) heroes[name] = { HP, MP };
    }

    data = data.slice(heroesCount + 1);

    for (let i = 0; i < data.length; i++) {
        let currentData = data[i].split(' - ');
        let command = currentData[0];
        if (command === 'End') {
            for (let key in heroes) {
                console.log(key);
                let [hp, mp] = Object.entries(heroes[key]);
                console.log(`  ${hp.join(': ')}`);
                console.log(`  ${mp.join(': ')}`);
            }
        };
        let heroName = currentData[1];
        let values = currentData.slice(2);

        switch (command) {
            case 'Heal':
                let currentDoze = Number(values[0]);
                let currentHealStatus = heroes[heroName].HP + currentDoze;
                let overDoze = currentHealStatus > 100;
                if (overDoze) {
                    currentDoze = currentDoze - (currentHealStatus - 100);
                    currentHealStatus -= currentHealStatus - 100;
                }
                heroes[heroName].HP = currentHealStatus;
                console.log(`${heroName} healed for ${currentDoze} HP!`);
                break;

            case 'Recharge':
                let currentQty = Number(values[0]);
                let currentManaStatus = heroes[heroName].MP + currentQty;
                let overQty = currentManaStatus > 200;
                if (overQty) {
                    currentQty = currentQty - (currentManaStatus - 200);
                    currentManaStatus -= currentManaStatus - 200;
                }
                heroes[heroName].MP = currentManaStatus;
                console.log(`${heroName} recharged for ${currentQty} MP!`);
                break;

            case 'TakeDamage':
                let damage = Number(values[0]);
                let attacker = values[1];
                heroes[heroName].HP -= damage;
                if (heroes[heroName].HP <= 0) {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete heroes[heroName];
                } else {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`);
                }
                break;

            case 'CastSpell':
                let requiredMP = Number(values[0]);
                let spell = values[1];
                if (heroes[heroName].MP >= requiredMP) {
                    heroes[heroName].MP -= requiredMP;
                    console.log(`${heroName} has successfully cast ${spell} and now has ${heroes[heroName].MP} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spell}!`);
                }
                break;
        }
    }
}


heroesOfCodeAndLogicVII([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);

/**Problem 3 - Heroes of Code and Logic VII
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2303#0.

You got your hands on the most recent update on the best MMORPG of all time – Heroes of Code and Logic. You want to play it all day long! So cancel all other arrangements and create your party!
On the first line of the standard input, you will receive an integer n – the number of heroes that you can choose for your party. On the next n lines, the heroes themselves will follow with their hit points and mana points separated by a single space in the following format: 
"{hero name} {HP} {MP}"
-	HP stands for hit points and MP for mana points
-	a hero can have a maximum of 100 HP and 200 MP
After you have successfully picked your heroes, you can start playing the game. You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given. 
There are several actions that the heroes can perform:
"CastSpell – {hero name} – {MP needed} – {spell name}"
•	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
•	If the hero is unable to cast the spell print:
o	"{hero name} does not have enough MP to cast {spell name}!"
"TakeDamage – {hero name} – {damage} – {attacker}"
•	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
•	If the hero has died, remove him from your party and print:
o	"{hero name} has been killed by {attacker}!"
"Recharge – {hero name} – {amount}"
•	The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can't go over the maximum value).
•	 Print the following message:
o	"{hero name} recharged for {amount recovered} MP!"
"Heal – {hero name} – {amount}"
•	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can't go over the maximum value).
•	 Print the following message:
o	"{hero name} healed for {amount recovered} HP!"
Input
•	On the first line of the standard input, you will receive an integer n
•	On the following n lines, the heroes themselves will follow with their hit points and mana points separated by a space in the following format
•	You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given
Output
•	Print all members of your party who are still alive, in the following format (their HP/MP need to be indented 2 spaces):
"{hero name}
  HP: {current HP}
  MP: {current MP}"
Constraints
•	The starting HP/MP of the heroes will be valid, 32-bit integers will never be negative or exceed the respective limits.
•	The HP/MP amounts in the commands will never be negative.
•	The hero names in the commands will always be valid members of your party. No need to check that explicitly.
 */