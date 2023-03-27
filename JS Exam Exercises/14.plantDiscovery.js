function plantDiscovery(input) {
    const plantCount = Number(input[0]);
    let plants = {};
    let plantNames = [];
    for (let i = 1; i <= plantCount; i++) {
        let [name, rarity] = input[i].split('<->');
        rarity = Number(rarity);
        plantNames.push(name);
        if (!plants.hasOwnProperty(name)) {
            plants[name] = {
                rarity,
                ratings: [],
            };
        } else {
            plants[name].rarity += rarity;
        }
    }

    input = input.slice(plantCount + 1);

    for (let element of input) {
        element = element.split(': ');
        const command = element[0];
        if (command === 'Exhibition') {
            averageRating();
            printResults();
            return;
        }

        const plantData = element[1].split(' - ');
        const plantName = plantData[0];
        const plantValue = plantData.slice(1);

        if (plantNames.indexOf(plantName) === -1) {
            console.log('error');
            continue;
        }

        switch (command) {
            case 'Rate': {
                plants[plantName].ratings.push(Number(plantValue[0]));
            }
                break;

            case 'Update': {
                plants[plantName].rarity = Number(plantValue[0]);
            }
                break;

            case 'Reset': {
                plants[plantName].ratings.splice(0);
            }
                break;
        }
    }

    function averageRating() {
        let averageRating = 0;
        for (let key in plants) {
            let ratingsLength = plants[key].ratings.length;
            if (ratingsLength > 1) {
                plants[key].ratings.reduce((result, rating) => {
                    result += rating;
                    return averageRating = result;
                });
                averageRating /= ratingsLength;
            } else {
                averageRating = plants[key].ratings.join('');
            }
            averageRating = Number(averageRating).toFixed(2);
            plants[key].ratings.splice(0, ratingsLength, averageRating);
        }
    }

    function printResults() {
        console.log('Plants for the exhibition:');
        for (let key in plants) {
            console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${plants[key].ratings[0]}`);
        }
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodi - 5",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);

/**Problem 3 - Plant Discovery
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2518#2.

You have now returned from your world tour. On your way, you have discovered some new plants, and you want to gather some information about them and create an exhibition to see which plant is highest rated.
On the first line, you will receive a number n. On the next n lines, you will be given some information about the plants that you have discovered in the format: "{plant}<->{rarity}". Store that information because you will need it later. If you receive a plant more than once, update its rarity.
After that, until you receive the command "Exhibition", you will be given some of these commands:
•	"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
•	"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
•	"Reset: {plant}" – remove all the ratings of the given plant
Note: If any given plant name is invalid, print "error"
After the command "Exhibition", print the information that you have about the plants in the following format:
"Plants for the exhibition:
- {plant_name1}; Rarity: {rarity}; Rating: {average_rating}
- {plant_name2}; Rarity: {rarity}; Rating: {average_rating}
…
- {plant_nameN}; Rarity: {rarity}; Rating: {average_rating}"
The average rating should be formatted to the second decimal place.
Input / Constraints
•	You will receive the input as described above
•	JavaScript: you will receive a list of strings
Output
•	Print the information about all plants as described above
*/
