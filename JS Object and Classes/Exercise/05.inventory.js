function inventory(input) {
    let heroData = Array.from(input)
        .map(element => element.split(' / '))
        .filter(element => element.length === 3);

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let allHeros = [];
    let name, level, items;

    for (let data of heroData) {
        [name, level, items] = data;
        allHeros.push(new Hero(name, Number(level), items));
    }

    allHeros.sort((a, b) => a.level - b.level);

    for (let object of allHeros) {
        console.log(`Hero: ${object.name}\nlevel => ${object.level}\nitems => ${object.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

console.log('===================================================================');
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);


/**5.	Inventory
Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
The input comes as an array of strings. Each element holds data for a hero, in the following format:
"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
Hero: {heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3}
 */