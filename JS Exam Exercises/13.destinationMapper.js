function destinationMapper(string) {
    const pattern = /([=\/]){1}(?<location>[A-Z]{1}[A-Za-z]{2,})\1/gm;
    const locations = string.matchAll(pattern);
    let travelPoints = 0;
    const destinations = [];
    for (const location of locations) {
        const locationLength = location.groups['location'].length;
        destinations.push(location.groups['location']);
        travelPoints += locationLength;
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('========================================================================================');
destinationMapper("ThisIs some InvalidInput");