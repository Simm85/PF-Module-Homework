function arrayRotation(array, rotationCount) {
    let currentArray = array;

    for (let i = 1; i <= rotationCount; i++) {
        let firstElement = currentArray[0];
        currentArray.shift(firstElement);
        currentArray.push(firstElement);
    }

    console.log(currentArray.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2); 

/** Array Rotation
Write a function that receives an array and the number of rotations you have to perform. 
Note: Depending on the number of rotations, the first element goes to the end.
Output
Print the resulting array elements separated by a single space.
*/