function passwordReset(input) {
    let data = Array.from(input);
    let givenString = data[0];
    for (let i = 1; i < data.length; i++) {
        let [command, param_1, param_2] = data[i].split(' ');

        switch (command) {
            case 'TakeOdd':
                takeOdd();
                break;

            case 'Cut':
                cut(givenString, Number(param_1), Number(param_2));
                break;

            case 'Substitute':
                replace(givenString, param_1, param_2);
                break;

            case 'Done':
                console.log(`Your password is: ${givenString}`);
                break;
        }
    }

    function takeOdd(string) {
        string = givenString;
        let newPass = '';
        for (let i = 0; i < string.length; i++) {
            if (i % 2 !== 0) newPass += string[i];
        }
        return console.log(givenString = newPass);
    }

    function cut(password, index, length) {
        let str_1 = password.substring(0, index);
        let str_2 = password.substring(index + length);
        password = str_1 + str_2;
        return console.log(givenString = password);
    }

    function replace(password, pattern, symbol) {
        if (password.includes(pattern)) {
            while (password.includes(pattern)) {
                password = password.replace(pattern, symbol);
            }
            return console.log(givenString = password);
        } else {
            return console.log('Nothing to replace!');
        }
    }
}

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);

/**Problem 1 - Password Reset
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2303#0.

Yet again, you have forgotten your password. Naturally, it's not the first time this has happened. Actually, you got so tired of it that you decided to help yourself with an intelligent solution.
Write a password reset program that performs a series of commands upon a predefined string. First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space. The commands will be the following:
•	"TakeOdd"
o	 Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
•	"Cut {index} {length}"
o	Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
o	The given index and the length will always be valid.
•	"Substitute {substring} {substitute}"
o	If the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result.
o	If it doesn't, prints "Nothing to replace!".
Input
•	You will be receiving strings until the "Done" command is given.
Output
•	After the "Done" command is received, print:
o	"Your password is: {password}"
Constraints
•	The indexes from the "Cut {index} {length}" command will always be valid.
*/

