function logIn(string) {
    let username = string[0];
    let counter = 0;

    for (let i = 1; i < string.length; i++) {
        let rawPassword = string[i];
        let newPassword = '';

        for (let j = rawPassword.length - 1; j >= 0; j--) {
            newPassword += rawPassword[j];
        }

        if (username !== newPassword) {
            counter++;
            if (counter === 4) return console.log(`User ${username} blocked!`);
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}
logIn(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
logIn(['Acer', 'login', 'go', 'let me in', 'recA']);
logIn(['momo', 'omom']);