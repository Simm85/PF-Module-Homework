function bitcoinMining(input) {
    const oneBitCoin = 11949.16;
    const oneGramOfGold = 67.51;
    let totalBitCoins = 0;
    let boughtBitcoins = 0;
    let shiftDays = 0;
    let minedGold = 0;
    let totalMoney = 0;
    let firstDay = 0;
    let cmd = true;
   
    for (let i = 0; i < input.length; i++) {
        shiftDays++;
        minedGold = input[i];
        if (shiftDays % 3 === 0) minedGold *= 0.7;
        totalMoney += minedGold * oneGramOfGold;

        if (totalMoney >= oneBitCoin) {
            boughtBitcoins = Math.floor(totalMoney / oneBitCoin);
            totalBitCoins += boughtBitcoins;
            totalMoney = totalMoney - (boughtBitcoins * oneBitCoin);

            if (cmd) {
                firstDay = shiftDays;
                cmd = false;
            }
        }
    }

    console.log(`Bought bitcoins: ${totalBitCoins}`);
    if (totalBitCoins > 0) console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([3124.15, 504.212, 2511.124]);

