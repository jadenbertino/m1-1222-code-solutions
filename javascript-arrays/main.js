/*

    COLORS

*/

const colors = [ 'red', 'white', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(`value of colors[${i}]:`, colors[i])
}
const america = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(america);

colors[2] = 'green';
const mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(mexico)

console.log('colors:', colors);
/*


    STUDENT

*/

const students = ['Jaden', 'Dylan', 'Brandon', 'Ron'];
let numberOfStudents = students.length;
console.log(`The Bertino Family Classroom has ${numberOfStudents} students.`)
let lastIndex = numberOfStudents - 1;
let lastStudent = students[lastIndex];
console.log(`The last (and shortest) student in the class is ${lastStudent}`);
console.log('students:', students);
