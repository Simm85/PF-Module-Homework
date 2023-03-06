function employees(employeeNames) {
    class Employee {
        constructor(name, employeeId) {
            this.name = name;
            this.employeeId = employeeId;
        }
    }

    let members = [];

    for (let employee of employeeNames) {
        let employeeId = employee.length;
        let name = employee;
        members.push(new Employee(name, employeeId));
    }

    members.forEach(member => console.log(`Name: ${member.name} -- Personal Number: ${member.employeeId}`));
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

/**1.	Employees
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
Try to use an object.
At the end print all the list employees in the following format:
 "Name: {employeeName} -- Personal Number: {personalNum}" 
 */