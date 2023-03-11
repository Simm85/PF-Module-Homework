function meetings(data) {
    class Meetings {
        constructor(weekDay, personName) {
            this.weekDay = weekDay;
            this.person = personName;
        }
    }

    let meetings = [];
    let day, personName;

    for (let element of data) {
        element = element.split(' ');
        [day, personName] = element;
        let isSuccessful = true;

        if (meetings.length > 0) {
            for (let object of meetings) {
                if (object.weekDay === day) {
                    console.log(`Conflict on ${day}!`);
                    isSuccessful = false;
                }
            }
        }

        if (isSuccessful) {
            console.log(`Scheduled for ${day}`);
            meetings.push(new Meetings(day, personName));
        }
    }

    meetings.forEach(meeting => console.log(`${meeting.weekDay} -> ${meeting.person}`));
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);

/**2.	Meetings
Write a function that manages meeting appointments. The input comes as an array of strings.
 Each string contains a weekday and person’s name. For each successful meeting, print a message. 
 If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. 
 In the end, print a list of all successful meetings. 
*/