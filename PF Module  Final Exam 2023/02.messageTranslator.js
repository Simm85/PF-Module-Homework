function messageTranslator(input) {
    let pattern = /[!](?<cmd>[A-Z]{1}[a-z]{2,})[!][:]\[(?<string>[A-Za-z]{8,})\]/gm;
    let msgCount = Number(input.shift());
    let translates = [];
    let messages = [];

    for (let i = 0; i < msgCount; i++) {
        messages = input[i].matchAll(pattern);
        if (pattern.test(input[i])) {
            let string = '';
            let command = '';
            for (let el of messages) {
                string = el.groups['string'];
                command = el.groups['cmd'];
            }
            for (let i = 0; i < string.length; i++) {
                let charNum = string.charCodeAt(i);
                translates.push(charNum);
            }
            console.log(`${command}: ${translates.join(' ')}`);
        } else {
            console.log("The message is invalid");
        }
    }
}

messageTranslator(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"
]);

console.log('===========================================================================');

messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"
]);

