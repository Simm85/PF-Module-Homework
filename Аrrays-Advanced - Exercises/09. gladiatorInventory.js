/***Gladiator Inventory
As a gladiator, Peter has a cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
You may receive the following commands:
•	Buy {equipment}
•	Trash {equipment}
•	Repair {equipment}
•	Upgrade {equipment}-{upgrade}
If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.
If you receive the Trash command, delete the equipment if it exists.
If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
If you receive the Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}".
 */

function gladiatorInventory(data, currentInventory, action, equipment) {
    currentInventory = Array.from(data[0].split(' '));

    for (let i = 1; i < data.length; i++) {
        data[i] = data[i].split(' ');
        action = data[i][0];
        equipment = data[i][1];

        switch (action) {
            case 'Buy': buy(equipment);
                break;

            case 'Trash': trash(equipment);
                break;

            case 'Repair': repair(equipment);
                break;

            case 'Upgrade': upgrade(equipment);
                break;
        }
    }

    function buy(equipment) {
        if (!currentInventory.includes(equipment)) currentInventory.push(equipment);
    }

    function trash(equipment) {
        if (currentInventory.includes(equipment)) {
            let equipmentIndex = currentInventory.indexOf(equipment);
            currentInventory.splice(equipmentIndex, 1);
        }
    }

    function repair(equipment) {
        if (currentInventory.includes(equipment)) {
            let equipmentIndex = currentInventory.indexOf(equipment);
            currentInventory.splice(equipmentIndex, 1);
            currentInventory.push(equipment);

        }
    }

    function upgrade(equipment) {
        let upgrade = equipment.split('-');
        if (currentInventory.includes(upgrade[0])) {
            let upgradePosition = currentInventory.indexOf(upgrade[0]);
            upgrade = upgrade.join(':');
            currentInventory.splice(upgradePosition + 1, 0, upgrade);
        }
    }
    return console.log(currentInventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);
