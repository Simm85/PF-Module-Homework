function worldTour(input) {
    let initDestinations = input.shift();
    for (let element of input) {
        element = element.split(':');
        const command = element[0];
        if (command === 'Travel')
            return console.log(`Ready for world tour! Planned stops: ${initDestinations}`);
        const values = element.slice(1);
        switch (command) {
            case 'Add Stop': {
                const index = Number(values[0]);
                const destination = values[1];
                addStop(index, destination, initDestinations);
                console.log(initDestinations);
            }
                break;

            case 'Remove Stop': {
                const startIndex = Number(values[0]);
                const endIndex = Number(values[1]);
                removeStop(startIndex, endIndex, initDestinations);
                console.log(initDestinations);
            }
                break;

            case 'Switch': {
                const oldString = values[0];
                const newString = values[1];
                switchStops(initDestinations, oldString, newString);
                console.log(initDestinations);
            }
                break;
        }
    }

    function addStop(index, destination, string) {
        let isValid = index >= 0 && index < string.length;
        if (isValid) {
            let firstPart = string.substring(0, index);
            let secondPart = string.substring(index);
            initDestinations = firstPart + destination + secondPart;
            return initDestinations;
        }
    }

    function removeStop(startIndex, endIndex, string) {
        let isStartValid = startIndex >= 0 && startIndex < string.length;
        let isEndValid = endIndex >= 0 && endIndex < string.length;
        if (isStartValid && isEndValid) {
            let charsToRemove = string.substring(startIndex, endIndex + 1);
            initDestinations = string.replace(charsToRemove, '');
            return initDestinations;
        }
    }

    function switchStops(initString, oldString, newString) {
        if (initString.includes(oldString)) {
            initDestinations = initString.replace(oldString, newString);
            return initDestinations;
        }
    }
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);


/**Problem 1 - World Tour
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2518#0.

You are a world traveler, and your next goal is to make a world tour. To do that, you have to plan out everything first. To start with, you would like to plan out all of your stops where you will have a break.
On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel", you will be given some commands to manipulate that initial string. The commands can be:
•	"Add Stop:{index}:{string}":
o	Insert the given string at that index only if the index is valid
•	"Remove Stop:{start_index}:{end_index}":
o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
•	"Switch:{old_string}:{new_string}":
o	If the old string is in the initial string, replace it with the new one (all occurrences)
Note: After each command, print the current state of the string!
After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
Input / Constraints
•	JavaScript: you will receive a list of strings
•	An index is valid if it is between the first and the last element index (inclusive) (0 ….. Nth) in the sequence.
Output
•	Print the proper output messages in the proper cases as described in the problem description
*/