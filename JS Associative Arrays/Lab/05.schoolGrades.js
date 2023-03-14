function schoolGrades(data) {
    let studentData = Object
        .assign([], data)
        .sort((a, b) => a.localeCompare(b))
        .map(el => el.split(' '));

    let students = new Map();

    for (let array of studentData) {
        let studentName = array[0];
        let grades = array.slice(1, array.length).join('');
        if (students.has(studentName)) {
            let newGrades = students.get(studentName);
            grades += newGrades;
        }
        students.set(studentName, grades);
    }

    for (let [studentName, grades] of students) {
        grades = grades.split('');
        let result = 0;
        grades.forEach(grade => result += Number(grade));
        result /= grades.length;
        console.log(studentName + ': ' + result.toFixed(2));
    }
}

console.log('=========================================================================');
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
)

/**Write a function that stores students and their grades throughout the year.
 -  If a student appears more than once, add the new grades to existing ones.
 - Finally, print the students and their average grades, sorted alphabetically by student name.
  The input comes as an array of strings.
Note: The average grades must be fixed to the second decimal place.
 */