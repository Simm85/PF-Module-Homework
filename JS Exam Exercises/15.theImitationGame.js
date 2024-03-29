function theImitationGame(input) {
    let secretWord = input.shift();
    for (let element of input) {
        element = element.split('|');
        let command = element[0];
        if (command === 'Decode') return console.log(`The decrypted message is: ${secretWord}`);
        let values = element.slice(1);
        switch (command) {
            case 'ChangeAll': {
                let elementToChange = values[0];
                let replacement = values[1];
                secretWord = secretWord.split(elementToChange).join(replacement);
            }
                break;
            case 'Insert':
                let index = Number(values[0]);
                let elementToInsert = values[1];
                secretWord = secretWord.split('');
                secretWord.splice(index, 0, elementToInsert);
                secretWord = secretWord.join('');
                break;
            case 'Move':
                let lettersToMove = secretWord.substring(0, Number(values[0]));
                secretWord = secretWord.replace(lettersToMove, '');
                secretWord += lettersToMove;
                break;
        }
    }
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);


/**Problem 1 - The Imitation Game
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2525#0.

During World War 2, you are a mathematician who has joined the cryptography team to decipher the enemy's enigma code. Your job is to create a program to crack the codes. 
On the first line of the input, you will receive the encrypted message. After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its true content. There are several types of instructions, split by '|'
•	"Move {number of letters}":
o	Moves the first n letters to the back of the string
•	"Insert {index} {value}":
o	Inserts the given value before the given index in the string
•	"ChangeAll {substring} {replacement}":
o	Changes all occurrences of the given substring with the replacement text
Input / Constraints
•	On the first line, you will receive a string with a message.
•	On the following lines, you will be receiving commands, split by '|' .
Output
•	After the "Decode" command is received, print this message:
"The decrypted message is: {message}"
 */