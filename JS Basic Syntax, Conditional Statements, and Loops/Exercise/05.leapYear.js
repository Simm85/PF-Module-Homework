function leapYear(integer) {
    if (Number.isInteger(integer / 4) && !Number.isInteger(integer / 100)) {
        console.log('yes');
    } else if (Number.isInteger(integer / 400) && Number.isInteger(integer / 100)) {
        console.log('yes');
    } else if (Number.isInteger(integer / 400)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
//leapYear(1984);
//leapYear(2003);
//leapYear(4);
//leapYear(2000);
leapYear(2024);