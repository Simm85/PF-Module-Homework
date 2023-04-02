function passwordValidator(input) {
    let initPassword = input.shift();
    for (let line of input) {
        let [command, ...values] = line.split(' ');
        if (command === 'Complete') return;
        switch (command) {
            case 'Replace': {
                let char = values[0];
                if (initPassword.includes(char)) {
                    let value = Number(values[1]);
                    let index = initPassword.indexOf(char);
                    let charValue = initPassword.charCodeAt(index); //Index instead of char. Small fix for 100/100 points
                    let result = charValue + value;
                    let newChar = String.fromCharCode(result);
                    initPassword = initPassword.split(char).join(newChar);
                    console.log(initPassword);
                }
            }
                break;

            case 'Insert': {
                let index = Number(values[0]);
                if (index >= 0 && index < initPassword.length) {
                    let char = values[1];
                    let left = initPassword.substring(0, index);
                    let right = initPassword.substring(index);
                    initPassword = left + char + right;
                    console.log(initPassword);
                }
            }
                break;

            case 'Make': {
                let index = Number(values[1]);
                if (index >= 0 && index < initPassword.length) {
                    let command = values[0];
                    let letter = initPassword[index];
                    command === 'Upper' ? letter = letter.toUpperCase() : letter = letter.toLowerCase();
                    initPassword = initPassword.replace(initPassword[index], letter);
                    console.log(initPassword);
                }
            }

            case 'Validation': {
                if (initPassword.length < 8) console.log('Password must be at least 8 characters long!');
                let regEx = /[^A-Za-z\d_]+/gm;
                if (regEx.test(initPassword)) console.log("Password must consist only of letters, digits and _!");
                let regEx_2 = /[A-Z]{1,}/gm;
                if (!regEx_2.test(initPassword)) console.log("Password must consist at least one uppercase letter!");
                let regEx_3 = /[a-z]{1,}/gm;
                if (!regEx_3.test(initPassword)) console.log("Password must consist at least one lowercase letter!");
                let regEx_4 = /[\d]{1,}/gm;
                if (!regEx_4.test(initPassword)) console.log("Password must consist at least one digit!");
            }
                break;
        }
    }
}
passwordValidator(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])


console.log('==============================================================================');

passwordValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'
]);
