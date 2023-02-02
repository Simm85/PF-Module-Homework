function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    
    number = number.toFixed(precision);
    number = Number(number);
    console.log(parseFloat(number));
}
rounding(3.15, 3);