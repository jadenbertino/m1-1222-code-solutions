const width = 22;
const height = 6;

const area = width * height;
console.log('area:', area);
console.log('typeof area:', typeof area);

const bill = 4;
const payment = 10;

const change = payment - bill;

console.log('change:', change);
console.log('typeof change:', typeof change);

const [quizzes, midterm, final] = [10, 25, 33];
const grade = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('typeof grade', typeof grade);

const [firstName, lastName] = ['Jaden', 'Bertino'];
const fullName = firstName + ' ' + lastName;
console.log('fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH = 11;
const isAcidic = pH < 7;
console.log('isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount = 33;
const isSparta = headCount === 300;
console.log('isSparta', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
