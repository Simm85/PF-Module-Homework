function thePianist(input) {
    let data = input.slice();
    const piecesCount = Number(data.shift());
    let collection = {};
    for (let i = 0; i < piecesCount; i++) {
        let [piece, composer, pieceKey] = data[i].split('|');
        collection[piece] = {
            composer,
            pieceKey,
        }
    }

    data = data.slice(piecesCount);

    for (let element of data) {
        element = element.split('|');
        const command = element[0];
        if (command === 'Stop') return printCollection();
        const currentPieceName = element[1];
        const composer = element[2];
        let pieceKey = element[3];
        switch (command) {
            case 'Add': {
                if (collection.hasOwnProperty(currentPieceName)) {
                    console.log(`${currentPieceName} is already in the collection!`);
                } else {
                    collection[currentPieceName] = {
                        composer,
                        pieceKey,
                    }
                    console.log(`${currentPieceName} by ${composer} in ${pieceKey} added to the collection!`);
                }
            }
                break;

            case 'Remove': {
                if (!collection.hasOwnProperty(currentPieceName)) {
                    console.log(`Invalid operation! ${currentPieceName} does not exist in the collection.`);
                } else {
                    delete collection[currentPieceName];
                    console.log(`Successfully removed ${currentPieceName}!`);
                }
            }
                break;

            case 'ChangeKey': {
                pieceKey = element[2];
                if (!collection.hasOwnProperty(currentPieceName)) {
                    console.log(`Invalid operation! ${currentPieceName} does not exist in the collection.`);
                } else {
                    collection[currentPieceName].pieceKey = pieceKey;
                    console.log(`Changed the key of ${currentPieceName} to ${pieceKey}!`);
                }
            }
                break;
        }
    }

    function printCollection() {
        for (let key in collection) {
            console.log(`${key} -> Composer: ${collection[key].composer}, Key: ${collection[key].pieceKey}`);
        }
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

/**Problem 3 - The Pianist
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2525#2.

You are a pianist, and you like to keep a list of your favorite piano pieces. Create a program to help you organize it and add, change, remove pieces from it!
On the first line of the standard input, you will receive an integer n – the number of pieces you will initially have. On the next n lines, the pieces themselves will follow with their composer and key, separated by "|" in the following format: "{piece}|{composer}|{key}".
Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given:
•	"Add|{piece}|{composer}|{key}":
o	You need to add the given piece with the information about it to the other pieces and print:
"{piece} by {composer} in {key} added to the collection!"
o	If the piece is already in the collection, print:
"{piece} is already in the collection!"
•	"Remove|{piece}":
o	If the piece is in the collection, remove it and print:
"Successfully removed {piece}!"
o	Otherwise, print:
"Invalid operation! {piece} does not exist in the collection."
•	"ChangeKey|{piece}|{new key}":
o	If the piece is in the collection, change its key with the given one and print:
"Changed the key of {piece} to {new key}!"
o	Otherwise, print:
"Invalid operation! {piece} does not exist in the collection."
Upon receiving the "Stop" command, you need to print all pieces in your collection in the following format:
"{Piece} -> Composer: {composer}, Key: {key}"
Input/Constraints
•	You will receive a single integer at first – the initial number of pieces in the collection
•	For each piece, you will receive a single line of text with information about it.
•	Then you will receive multiple commands in the way described above until the command "Stop".
Output
•	All the output messages with the appropriate formats are described in the problem description.
 */