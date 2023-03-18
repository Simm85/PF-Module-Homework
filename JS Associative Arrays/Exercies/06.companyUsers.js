function companyUsers(data) {
    let companyData = Object.assign([], data);
    let company = {};

    for (let data of companyData) {
        let [name, employeeId] = data.split(' -> ');

        if (company.hasOwnProperty(name)) {
            if (company[name].indexOf(employeeId) === -1) company[name].push(employeeId);
        } else {
            company[name] = [employeeId];
        }
    }

    let sorted = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]));

    for (let company of sorted) {
        console.log(company[0]);
        company[1].forEach(employee => console.log(`-- ${employee}`));
    }
}


companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);

console.log('==========================================================================================');

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

/**6.	Company Users
Write a function, which keeps the information about companies and their employees. 
You will receive an array of strings containing the company name and employee's id.
Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
When you finish reading data, order the companies by their name in ascending order. 
Print the company name and each employee's id in the following format:
{companyName}
-- {id1}
-- {id2}
-- {idN}
Input / Constraints
•	The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
•	The input always will be valid.



companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);
 */