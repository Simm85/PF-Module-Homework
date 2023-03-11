function phoneBook(data) {
    class Person {
        constructor(name, phoneNumber) {
            this.name = name;
            this.phoneNumber = phoneNumber;
        }
    }

    let person = [];
    let name, phoneNumber;

    for (let element of data) {
        element = element.split(' ');
        [name, phoneNumber] = element;
        let push = true;

        for (let object of person) {
            if (object.name === name) {
                object.phoneNumber = phoneNumber;
                push = false;
            }
        }

        if (push) person.push(new Person(name, phoneNumber));
    }

    person.forEach(object => console.log(`${object.name} -> ${object.phoneNumber}`));
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);

/**1.	Phone Book
Write a function that stores information about a person’s name and phone number.
 The input is an array of strings with space-separated name and number.
  Replace duplicate names. Print the result as shown.
*/