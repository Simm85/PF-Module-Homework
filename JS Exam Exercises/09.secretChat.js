function secretChat(input) {
    let message = input.shift();
    for (let el of input) {
        let arr = el.split(':|:');
        let command = arr[0];
        if (command === 'Reveal') return console.log(`You have a new text message: ${message}`);
        let values = arr.slice(1);
        switch (command) {
            case 'ChangeAll': {
                let substring = values[0];
                let replacement = values[1];
                changeAll(message, substring, replacement);
            }
                break;

            case 'Reverse': {
                let substring = values[0];
                reverse(message, substring)
            }
                break;

            case 'InsertSpace': {
                insertSpace(message, Number(values[0]));
            }
                break;
        }

        function changeAll(string, substring, replacement) {
            message = string.split(`${substring}`).join(`${replacement}`);
            console.log(message);
            return message;
        }

        function reverse(string, substring) {
            if (string.includes(substring)) {
                let len = substring.length;
                let tailIndex = string.indexOf(substring);
                let startStr = string.substring(0, tailIndex);
                let endStr = string.substring(tailIndex, tailIndex + len)
                    .split('')
                    .reverse()
                    .join('');
                let midStr = string.substring(tailIndex + len);
                message = startStr + midStr + endStr;
                console.log(message);
                return message;
            } else {
                console.log('error');
            }
        }

        function insertSpace(string, index) {
            string = string.split('');
            for (let i = 0; i <= index; i++) {
                if (i === index) string.splice(i, 0, ' ');
            }
            message = string.join('');
            console.log(message);
            return message;
        }
    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

/**Problem 1 - Secret Chat
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2307#0.

You have plenty of free time, so you decide to write a program that conceals and reveals your received messages. Go ahead and type it in!
On the first line of the input, you will receive the concealed message. After that, until the "Reveal" command is given, you will receive strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its actual content. There are several types of instructions, split by ":|:"
•	"InsertSpace:|:{index}":
o	Inserts a single space at the given index. The given index will always be valid.
•	"Reverse:|:{substring}":
o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
o	If not, print "error".
o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
•	"ChangeAll:|:{substring}:|:{replacement}":
o	Changes all occurrences of the given substring with the replacement text.
Input / Constraints
•	On the first line, you will receive a string with a message.
•	On the following lines, you will be receiving commands, split by ":|:".
Output
•	After each set of instructions, print the resulting string. 
•	After the "Reveal" command is received, print this message:
"You have a new text message: {message}"
 */