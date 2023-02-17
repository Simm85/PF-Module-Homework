function vacation(groupCount, groupType, day) {
    let totalPrice = 0;

    switch (groupType) {
        case 'Students':

            if (day === 'Friday') {
                totalPrice = groupCount * 8.45;
            } else if (day === 'Saturday') {
                totalPrice = groupCount * 9.80;
            } else if (day === 'Sunday') {
                totalPrice = groupCount * 10.46;
            }

            if (groupCount >= 30) totalPrice -= totalPrice * 0.15;

            break;

        case 'Business':

            if (day === 'Friday') {
                totalPrice = groupCount * 10.90;
            } else if (day === 'Saturday') {
                totalPrice = groupCount * 15.60;
            } else if (day === 'Sunday') {
                totalPrice = groupCount * 16;
            }

            if (groupCount >= 100) totalPrice -= totalPrice * 0.10;

            break;

        case 'Regular':

            if (day === 'Friday') {
                totalPrice = groupCount * 15;
            } else if (day === 'Saturday') {
                totalPrice = groupCount * 20;
            } else if (day === 'Sunday') {
                totalPrice = groupCount * 22.50;
            }

            if (groupCount >= 10 && groupCount <= 20) totalPrice -= totalPrice * 0.05;

            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
);

vacation(40,
    "Regular",
    "Saturday"
);