function santasSecretHelper(input) {
    const data = input.slice();
    const n = Number(data.shift());
    const messages = [];
    for (const string of data) {
        let decryptedMsg = '';
        for (let i = 0; i < string.length; i++) {
            const newCharCode = string.charCodeAt(i) - n;
            const newChar = String.fromCharCode(newCharCode);
            decryptedMsg += newChar;
        }
        messages.push(decryptedMsg);
    }

    const pattern = /[@]{1}(?<name>[A-Z]{1}[a-zA-Z]{1,})(?<separator>[^@:\-!>]+)(?<behaviour>[!]{1}[G-N][!]{1})/gm;
    const allChildren = [];
    messages.forEach(msg => allChildren.push(msg.matchAll(pattern)));

    for (const child of allChildren) {
        for (const key of child) {
            const childName = key.groups['name'];
            const childMood = key.groups['behaviour'];
            if (childMood.includes('G')) console.log(childName);
        }
    }
}
santasSecretHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh - nmguuejn$J$',
    'CVwdq & gnmjkvng$Q$',
    'end'
]);

/**Santa’s Secret Helper
After the successful second Christmas, Santa needs to gather information about the behavior of children to plan the presents for next Christmas. He has a secret helper, who is sending him encrypted information. Your task is to decrypt it and create a list of the children who have been good. 
You will receive an integer, which represents a key and afterwards some messages, which you must decode by subtracting the key from the value of each character. After the decryption, to be considered a valid match, a message should:
-	Have a name, which starts after '@' and contains only letters from the Latin alphabet
-	Have a behaviour type - "G"(good) or "N"(naughty) and must be surrounded by "!" (exclamation mark).
The order in the message should be: child’s name -> child’s behavior. They can be separated from the others by any character except: '@', '-', '!', ':' and '>'. 
You will be receiving message until you are given the “end” command. Afterwards, print the names of the children, who will receive a present, each on a new line. 
Input / Constraints
•	The first line holds n – the number which you have to subtract from the characters – integer in range [1…100];
•	On the next lines, you will be receiving encrypted messages.
Output
Print the names of the children, each on a new line
 */

