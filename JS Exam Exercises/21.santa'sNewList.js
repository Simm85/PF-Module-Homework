function santasNewList(input) {
    const santasList = Object.assign([], input);
    class Child {
        constructor(name, present, presentCount) {
            this.name = name;
            this.present = present;
            this.presentCount = presentCount;
        }
    }

    let presentsInfo = new Map();
    let childrenList = [];

    for (let data of santasList) {
        data = data.split('->');
        switch (data[0]) {
            case 'END':
                sortChildrenList();
                printReults();
                break;

            case 'Remove':
                let childToRemove = data[1];
                removeBadChild(childrenList, childToRemove);
                break;

            default:
                let [childName, present, count] = data;
                count = Number(count)
                addChildrenToList(childName, present, count);
                presentsInfo.has(present)
                    ? presentsInfo.set(present, count += presentsInfo.get(present))
                    : presentsInfo.set(present, count);
                break;
        }
    }

    function removeBadChild(childrenList, childName) {
        for (let child of childrenList) {
            if (child.name === childName) childrenList.splice(childrenList.indexOf(child), 1);
            return childrenList;
        }
    }

    function addChildrenToList(childName, present, count) {
        let isInList = false;
        if (childrenList.length > 1) {
            for (let child of childrenList) {
                if (child.name === childName) {
                    child.presentCount += count;
                    isInList = true;
                    break;
                }
            }
        }
        if (!isInList)
            return childrenList.push(new Child(childName, present, count));
    }

    function sortChildrenList() {
        childrenList.sort((a, b) => {
            let countA = a.presentCount;
            let countB = b.presentCount;
            if (countA - countB > 0) {
                return countB - countA;
            } else if (countA - countB === 0) {
                return a.name.localeCompare(b.name);
            }
        });
        return childrenList;
    }

    function printReults() {
        console.log('Children:');
        childrenList.forEach(child => console.log(`${child.name} -> ${child.presentCount}`));
        console.log('Presents:');
        for (const present of presentsInfo) {
            console.log(`${present[0]} -> ${present[1]}`);
        }
    }
}
santasNewList(['Sammy->Candy->12', 'Annie->Candy->12', 'Dannie->Candy->12', 'END']);

console.log('====================================================================================');

santasNewList([
    'Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END'
]);

console.log('===============================================================================================');

santasNewList([
    'Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END'
]);

/**Santa’s New List
Santa needs to start creating his new list for the next Christmas. Your job is to help him receive and keep the incoming information. He will receive information about the names of the children, the type of present they want (toy, candy, clothing) and the wanted amount in the following format:
{childName}->{typeOfToy}->{amount}
You can receive a command “Remove->{childName}”. In this case, you need to exclude the child from the new list with good children, but don’t change the information about the type of present he or she wanted and the wanted amount. Santa has already gotten the presents, so he might give them to another very good child. 
When you receive the “END” command, you need to process it and print it, ordered descending by the total amount of presents for a child and then by their names. The format is given bellow. 
Input 
Until you receive "END" command you will be receiving information about the wanted presents in the following format:
"{childName}->{typeOfPresent}->{amount}".
You can receive a command to remove a child from the list -> "Remove->{childName}"
Output
•	Print the presents for each child, ordered descending by the total amount and then by their name, in the following format: 
Children:
{childName} -> {points}
•	After that print type of present and the total count for it in the following format:
Presents:
{type} –> {count}
Constraints
•	The count of presents will always be a valid integer in the range [0-100];
*/