function emojiDetector(text) {
    let numberRegEx = /\d/g;
    let numbers = text[0].match(numberRegEx);
    let coolThreshold = numbers.map(el => Number(el))
        .reduce((result, number) => {
            return number ? result * number : result + number;
        }, 1);

    console.log(`Cool threshold: ${coolThreshold}`);

    let wordRegEx = /([:]{2}|[*]{2})[A-z]{1}[a-z]{2,}\1/g;
    let emojies = text[0].match(wordRegEx);
    let foundEmojies = 0;
    let coolEmojies = [];
    let regEx = /\w+/;

    for (let emoji of emojies) {
        let currentEmoji = emoji.match(regEx);
        let coolness = 0;
        foundEmojies++;

        for (let i = 0; i < currentEmoji[0].length; i++) {
            coolness += currentEmoji[0].charCodeAt(i);
        }

        if (coolness >= coolThreshold) coolEmojies.push(emoji);
    }

    if (foundEmojies > 0) {
        console.log(`${foundEmojies} emojis found in the text. The cool ones are:`);
        if (coolEmojies.length > 0)
            coolEmojies.forEach(emoji => console.log(emoji));
    }
}


emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);

/**Your task is to write a program that extracts emojis from a text and find the threshold based on the input.
You have to get your cool threshold. It is obtained by multiplying all the digits found in the input.  The cool threshold could be a huge number, so be mindful.
An emoji is valid when:
•	It is surrounded by 2 characters, either "::" or "**"
•	It is at least 3 characters long (without the surrounding symbols)
•	It starts with a capital letter
•	Continues with lowercase letters only
Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::
You need to count all valid emojis in the text and calculate their coolness. The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji. 
Examples: ::Joy:: - 306, **Banana** - 577, ::Wink:: - 409
You need to print the result of the cool threshold and, after that to take all emojis out of the text, count them and print only the cool ones on the console.
Input
•	On the single input, you will receive a piece of string. 
Output
•	On the first line of the output, print the obtained Cool threshold in the format:
"Cool threshold: {coolThresholdSum}"
•	On the following line, print the count of all emojis found in the text in format:
"{countOfAllEmojis} emojis found in the text. The cool ones are:
{cool emoji 1}
{cool emoji 2}
There is an unfixed bug 80/100 in Judje!!! */