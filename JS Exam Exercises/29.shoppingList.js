function shoppingList(input) {
    let initList = input.shift().split('!');
    let endCommand = input[input.length - 1].split(' ').join('');
    input.splice(input.length - 1, 1, endCommand);
    for (let i = 0; i < input.length; i++) {
        let [command, ...product] = input[i].split(' ');
        if (command === 'GoShopping!') return console.log(initList.join(', '));
        switch (command) {
            case 'Unnecessary': {
                let item = product[0];
                if (initList.indexOf(item) !== -1)
                    initList.splice(initList.indexOf(item), 1);
            }
                break;
            case 'Urgent': {
                let item = product[0];
                if (initList.indexOf(item) === -1)
                    initList.unshift(item);
            }
                break;
            case 'Correct': {
                let oldItem = product[0];
                let newItem = product[1];
                if (initList.indexOf(oldItem) !== -1)
                    initList.splice(initList.indexOf(oldItem), 1, newItem);
            }
                break;
            case 'Rearrange': {
                let item = product[0];
                if (initList.indexOf(item) !== -1) {
                    initList.splice(initList.indexOf(item), 1);
                    initList.push(item);
                }
            }
                break;
        }
    }
}
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);



/**Problem 2 - Shopping List
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2031#1.

It's the end of the week, and it is time for you to go shopping, so you need to create a shopping list first.
Input
You will receive an initial list with groceries separated by an exclamation mark "!".
After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
•	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
•	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
•	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
•	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
Constraints
•	There won't be any duplicate items in the initial list
Output
•	Print the list with all the groceries, joined by ", ":
"{firstGrocery}, {secondGrocery}, … {nthGrocery}"
 */