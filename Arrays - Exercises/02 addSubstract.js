function addSubstract(inputArray) {
    let newArray = [];
    let inputArraySum = 0;
    let newArraySum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        let evenNum = 0;
        let oddNum = 0;
        if (inputArray[i] % 2 === 0) {
            evenNum = inputArray[i];
            evenNum += i;
            newArray.push(evenNum);
        } else {
            oddNum = inputArray[i];
            oddNum -= i;
            newArray.push(oddNum);
        }

        newArraySum += newArray[i];
        inputArraySum += inputArray[i];
    }

    console.log(newArray);
    console.log(inputArraySum);
    console.log(newArraySum);
}
addSubstract([5, 15, 23, 56, 35]);

/** Add and Subtract
Write a function, which changes the value of odd and even numbers in an array of numbers. 
•	If the number is even - add to its value its index position
•	If the number is odd - subtract to its value its index position
Output
On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.
*/