function cardGame(data) {
    let playersData = Object.assign([], data);
    let players = new Map();
    let cardsPower = {};

    for (let i = 2; i <= 14; i++) {
        if (i <= 10) cardsPower[String(i)] = i;
        switch (i) {
            case 11: cardsPower['J'] = 11; break;
            case 12: cardsPower['Q'] = 12; break;
            case 13: cardsPower['K'] = 13; break;
            case 14: cardsPower['A'] = 14; break;
        }
    }

    let typeMultiplier = {
        C: 1,
        D: 2,
        H: 3,
        S: 4
    }

    for (let data of playersData) {
        data = data.split(': ');
        let [playerName, cards] = data;
        if (players.has(playerName)) cards += `, ${players.get(playerName)}`;
        players.set(playerName, cards);
    }

    let newPlayers = new Map();

    for (let player of players.entries()) {
        let validHand = [];
        let playerName = player[0];
        let cards = player[1].split(', ');

        for (let card of cards) {
            if (validHand.indexOf(card) === -1) validHand.push(card);
        }

        let playerCards = validHand.join(' ');
        if (newPlayers.has(playerName)) playerCards += players.get(playerName);
        newPlayers.set(playerName, playerCards);
    }

    for (let player of newPlayers.entries()) {
        let sum = 0;
        let power = 0;
        let type = 0;
        let cards = player[1].split(' ');

        for (let card of cards) {
            for (let key in cardsPower) {
                if (card.includes(key)) {
                    power = cardsPower[key]; break;
                }
            }

            for (let key in typeMultiplier) {
                if (card.includes(key)) {
                    type = typeMultiplier[key]; break;
                }
            }

            sum += power * type;
        }

        console.log(`${player[0]}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);

console.log('==========================================================================');

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
)

/**5.	Card Game
You are given a sequence of people and for every person what cards he draws from the deck. The input will be an array of strings. Each string will be in the format:
{personName}: {PT, PT, PT,… PT}
Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
Finally print out the total value each player has in his hand in the format:
{personName}: {value}
 */