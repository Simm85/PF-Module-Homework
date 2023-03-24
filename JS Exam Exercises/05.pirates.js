function pirates(input) {
    let data = Object.assign([], input);

    //Aming targets for robery.
    let index = 0;
    let currentValue = data[index];
    let targetCollection = [];
    while (currentValue !== 'Sail') {
        let targets = {};
        let notDuplicated = true;
        let [city, population, gold] = data[index].split('||');

        if (!targets.hasOwnProperty('city')) {
            targets['city'] = city;
            targets['population'] = Number(population);
            targets['gold'] = Number(gold);
        }

        for (let object of targetCollection) {
            if (object.city === targets.city) {
                object.population += targets.population;
                object.gold += targets.gold;
                notDuplicated = false;
            }
        }

        if (notDuplicated) targetCollection.push(targets);
        index++;
        currentValue = data[index];
    }

    // Atacking targets.
    data = data.slice(data.indexOf('Sail') + 1, data.length);
    index = 0;
    currentValue = data[index];

    while (currentValue !== 'End') {
        currentValue = currentValue.split('=>');
        let action, city, people, gold;
        action = currentValue[0];

        if (action === 'Plunder') {
            city = currentValue[1];
            people = Number(currentValue[2]);
            gold = Number(currentValue[3]);
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            plunder(targetCollection, city, people, gold);
        } else {
            city = currentValue[1];
            gold = Number(currentValue[2]);
            prosper(targetCollection, city, gold);
        }

        index++;
        currentValue = data[index];
        if (currentValue === 'End') {
            console.log(`Ahoy, Captain! There are ${targetCollection.length} wealthy settlements to go to:`);
            targetCollection.forEach(object => console.log(`${object.city} -> Population: ${object.population} citizens, Gold: ${object.gold} kg`));
        }
    }

    function plunder(targetCollection, city, people, gold) {
        for (let object of targetCollection) {
            if (object.city === city) {
                object.population -= people;
                object.gold -= gold;

                if (object.population <= 0 || object.gold <= 0) {
                    targetCollection.splice(targetCollection.indexOf(object), 1);
                    console.log(`${city} has been wiped off the map!`);
                }
            }
        }
    }

    function prosper(targetCollection, city, gold) {
        if (gold < 0) {
            console.log(`Gold added cannot be a negative number!`);
        } else {
            for (let object of targetCollection) {
                if (object.city === city) {
                    object.gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${object.gold} gold.`);
                }
            }
        }
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);
console.log('==========================================================================');
console.log('==========================================================================');
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);

/**Problem 3 - P!rates
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2302#2.

Anno 1681. The Caribbean. The golden age of piracy. You are a well-known pirate captain by the name of Jack Daniels. Together with your comrades Jim (Beam) and Johnny (Walker), you have been roaming the seas, looking for gold and treasure… and the occasional killing, of course. Go ahead, target some wealthy settlements and show them the pirate's way!
Until the "Sail" command is given, you will be receiving:
•	You and your crew have targeted cities, with their population and gold, separated by "||".
•	If you receive a city that has already been received, you have to increase the population and gold with the given values.
After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given. 
Events will be in the following format:
•	"Plunder=>{town}=>{people}=>{gold}"
o	You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold. 
o	For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
o	If any of those two values (population or gold) reaches zero, the town is disbanded.
	You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
o	There will be no case of receiving more people or gold than there is in the city.
•	"Prosper=>{town}=>{gold}"
o	There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
o	The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.
o	If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message: 
"{gold added} gold added to the city treasury. {town} now has {total gold} gold."
Input
•	On the first lines, until the "Sail" command, you will be receiving strings representing the cities with their gold and population, separated by "||"
•	On the following lines, until the "End" command, you will be receiving strings representing the actions described above, separated by "=>"
Output
•	After receiving the "End" command, if there are any existing settlements on your list of targets, you need to print all of them, in the following format:
"Ahoy, Captain! There are {count} wealthy settlements to go to:
{town1} -> Population: {people} citizens, Gold: {gold} kg
{town2} -> Population: {people} citizens, Gold: {gold} kg
…
{town…n} -> Population: {people} citizens, Gold: {gold} kg"
•	If there are no settlements left to plunder, print:
"Ahoy, Captain! All targets have been plundered and destroyed!"
Constraints
•	The initial population and gold of the settlements will be valid 32-bit integers, never negative, or exceed the respective limits.
•	The town names in the events will always be valid towns that should be on your list.
*/