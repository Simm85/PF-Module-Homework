function partyTime(data) {
    let dataCopy = Object.assign([], data);
    let commandIndex = dataCopy.indexOf('PARTY');
    let guestList = dataCopy.slice(0, commandIndex);
    let comingGuestList = dataCopy.slice(commandIndex + 1, dataCopy.length);
    let VIP = [];
    let regular = [];

    for (let guest of guestList) {
        guest.charAt(0) == Number(guest.charAt(0)) ? VIP.push(guest) : regular.push(guest);
    }

    for (let guest of comingGuestList) {
        if (VIP.indexOf(guest) >= 0) VIP.splice(VIP.indexOf(guest), 1);
        if (regular.indexOf(guest) >= 0) regular.splice(regular.indexOf(guest), 1);
    }

    console.log(VIP.length + regular.length);
    VIP.forEach(guest => console.log(guest));
    regular.forEach(guest => console.log(guest));
}
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    '2FQZT3uC',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    '2FQZT3uC',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);
console.log('==================================================');
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    '4IK9Yo0h',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
/**4.	Party Time
There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists. 
The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".
All VIP numbers start with a digit.
When you receive the command "PARTY", the guests start coming.
Print the count of guests then all guests, who didn't come to the party (VIP must be printed first). 
Hint: Guest names are not unique. Only the first match is removed when receiving a name.
 */