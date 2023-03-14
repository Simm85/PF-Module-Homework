function addressBook(data) {
    let addressBook = [];
    for (let element of data) {
        element = element.split(':');
        let currentObj = {
            personName: element[0],
            address: element[1],
        }

        let push = true;

        for (let object of addressBook) {
            if (currentObj.personName === object.personName) {
                object.address = currentObj.address;
                push = false;
            }
        }
        if (push) addressBook.push(currentObj);
    }

    addressBook
        .sort((a, b) => a.personName.localeCompare(b.personName))
        .forEach(register => console.log(`${register.personName} -> ${register.address}`));
}

//console.log('=================================================================');



let elems = ['Burgas', 'Varna', 'Sofia', 'burgas', 'hello'];
let set = new Map();
elems.forEach(el => set.set(el,));
///set.clear();

console.log(set);