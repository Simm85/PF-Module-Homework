function activationKeys(input) {
    let data = Object.assign([], input);
    let rawKey = data.shift();
    let commandsAndActions = data.map(el => el.split('>>>'));

    for (let array of commandsAndActions) {
        let action = array.shift();
        if (action === 'Generate') return console.log(`Your activation key is: ${rawKey}`);

        switch (action) {
            case 'Slice':
                let [start, end] = array;
                let charsToDelete = rawKey.slice(start, end);
                rawKey = rawKey.replace(charsToDelete, '');
                console.log(rawKey);
                break;

            case 'Contains':
                let substring = array[0];
                rawKey.includes(substring)
                    ? console.log(`${rawKey} contains ${substring}`)
                    : console.log('Substring not found!');
                break;

            case 'Flip':
                let subAction = array.shift();
                let [startIndex, endIndex] = array;
                let chars = rawKey.substring(startIndex, endIndex);
                subAction === 'Upper'
                    ? rawKey = rawKey.replace(chars, chars.toUpperCase())
                    : rawKey = rawKey.replace(chars, chars.toLowerCase());
                console.log(rawKey);
                break;
        }
    }
}
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);


/**Problem 1 - Activation Keys
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2302#0.

You are about to make some good money, but first, you need to think of a way to verify who paid for your product and who didn't. You have decided to let people use the software for a free trial period and then require an activation key to continue using the product. Before you can cash out, the last step is to design a program that creates unique activation keys for each user. So, waste no more time and start typing!
The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
There are several types of instructions, split by ">>>":
•	"Contains>>>{substring}":
o	If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
o	Otherwise, prints: "Substring not found!"
•	"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
o	All given indexes will be valid.
•	"Slice>>>{startIndex}>>>{endIndex}":
o	Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
o	Both indices will be valid.
Input
•	The first line of the input will be a string consisting of letters and numbers only. 
•	After the first line, until the "Generate" command is given, you will be receiving strings.
Output
•	After the "Generate" command is received, print:
o	"Your activation key is: {activation key}"
*/
