function maxNumber(array) {
    let newArray = new Array();
    let isBigger = false;

    while (array.length !== 0) {

        let testInteger = array.shift(array[0]);

        for (let i = 0; i < array.length; i++) {

            let currentInteger = array[i];

            if (testInteger > currentInteger) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }

        if (isBigger || array.length === 0) {
            newArray.push(testInteger);
        }
    }

    console.log(newArray.join(' '));
}
maxNumber([41, 41, 34, 20]);

/** Max Number
Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right. 
Output */