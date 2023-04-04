function inventory(input) {
    let inventory = input.shift().split(', ');
    for (let line of input) {
        let [command, item] = line.split(' - ');
        if (command === 'Craft!') return console.log(inventory.join(', '));
        switch (command) {
            case 'Collect': {
                if (inventory.indexOf(item) === -1) inventory.push(item);
            } break;

            case 'Drop': {
                if (inventory.indexOf(item) !== -1) inventory.splice(inventory.indexOf(item), 1);
            } break;
            case 'Combine Items': {
                let [oldItem, newItem] = item.split(':');
                if (inventory.indexOf(oldItem) !== -1)
                    inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem);
            } break;

            case 'Renew': {
                if (inventory.indexOf(item) !== -1) {
                    inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(item);
                }
            } break;
        }
    }
}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);
console.log('==============================================================================================');
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);
/**Problem 3. Inventory
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2028#2.

As a young traveler, you gather items and craft new items.
Input / Constraints
You will receive a journal with some collecting items, separated with a comma and a space (", "). After that, until receiving "Craft!" you will be receiving different commands split by " - ":
•	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
•	"Drop - {item}" - you should remove the item from your inventory if it exists.
•	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one. Otherwise, ignore the command.
•	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
Output
After receiving "Craft!" print the items in your inventory, separated by ", ".
 */