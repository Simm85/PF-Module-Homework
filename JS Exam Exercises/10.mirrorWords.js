function mirrorWords(input) {
    const pattern = /([@#]{1})(?<wordOne>[a-zA-Z]{3,})\1{2}(?<wordTwo>[a-zA-Z]{3,})\1/g;
    let wordPairs = [];
    input.forEach(string => wordPairs = string.matchAll(pattern));

    let pairCount = 0;
    let mirrorWords = [];

    for (const word of wordPairs) {
        pairCount++;
        const leftWord = word.groups['wordOne'];
        let rightWord = word.groups['wordTwo'].split('').reverse().join('');
        if (leftWord === rightWord) {
            rightWord = rightWord.split('').reverse().join('');
            mirrorWords.push(leftWord + ' <=> ' + rightWord);
        }
    }

    pairCount === 0
        ? console.log('No word pairs found!')
        : console.log(`${pairCount} word pairs found!`);

    mirrorWords.length === 0
        ? console.log('No mirror words!')
        : console.log(`The mirror words are:\n${mirrorWords.join(', ')}`);
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
/**Problem 2 - Mirror words
Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2307#1.

The SoftUni Spelling Bee competition is here. But it`s not like any other Spelling Bee competition out there. It`s different and a lot more fun! You, of course, are a participant, and you are eager to show the competition that you are the best, so go ahead, learn the rules and win!
On the first line of the input, you will be given a text string. To win the competition, you have to find all hidden word pairs, read them, and mark the ones that are mirror images of each other.
First of all, you have to extract the hidden word pairs. Hidden word pairs are:
•	Surrounded by "@" or "#" (only one of the two) in the following pattern #wordOne##wordTwo# or @wordOne@@wordTwo@
•	At least 3 characters long each (without the surrounding symbols)
•	Made up of letters only
If the second word, spelled backward, is the same as the first word and vice versa (casing matters!), they are a match, and you have to store them somewhere. Examples of mirror words: 
#Part##traP# @leveL@@Level@ #sAw##wAs#
•	If you don`t find any valid pairs, print: "No word pairs found!"
•	If you find valid pairs print their count: "{valid pairs count} word pairs found!"
•	If there are no mirror words, print: "No mirror words!"
•	If there are mirror words print:
"The mirror words are:
{wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, … {wordOne} <=> {wordtwo}"
Input / Constraints
•	You will recive a string.
Output
•	Print the proper output messages in the proper cases as described in the problem description.
•	If there are pairs of mirror words, print them in the end, each pair separated by ", ".
•	Each pair of mirror word must be printed with " <=> " between the words.
 */