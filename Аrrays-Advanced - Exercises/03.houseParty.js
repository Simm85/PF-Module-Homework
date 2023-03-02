/**3.	House Party
Write a function that keeps track of guests that are going to a house party.
You will be given an array of strings. Each string will be one of the following:
-	"{name} is going!"
-	"{name} is not going!"
If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
At the end print all the guests each on a separate line.
 */

function houseParty(strArray) {
    let data = strArray.slice().map(element => element.split(' '));
    let guestName = '';
    let listOfGuests = [];

    for (let i = 0; i < data.length; i++) {
        let isGoing = false;
        let isAlreadyInTheList = false;
        guestName = data[i][0];
        data[i].includes('not') ? isGoing = false : isGoing = true;

        for (let j = i + 1; j < data.length; j++) {
            let nextGuestName = data[j][0];

            if (guestName === nextGuestName) {
                isAlreadyInTheList = true
                data[j].includes('not') ? isGoing = false : isGoing = true;
                data.splice(j, 1);
            }
        }

        // Add person if he/she is not in the list and will visit the party.
        if (isGoing) {
            if (isAlreadyInTheList) console.log(`${guestName} is already in the list!`);
            listOfGuests.push(guestName);
        } else {
            // Remove person if he/she is in the list and will not visit the party.
            if (!isAlreadyInTheList) console.log(`${guestName} is not in the list!`);
            listOfGuests = listOfGuests.filter(name => name !== guestName);
        }
    }
    // Print all the guests each on seperate line.
    return console.log(listOfGuests.join('\n'));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);