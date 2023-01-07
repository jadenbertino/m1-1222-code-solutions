/* exported getStudentNames */

function getStudentNames(students) {
  // return students.map(student => student.name)
  const studentNames = [];
  for (let student of students) {
    studentNames.push(student.name);
  }
  return studentNames;
}