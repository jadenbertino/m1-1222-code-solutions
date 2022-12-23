/*

    STUDENT

*/

const student = {
  firstName: 'Jaden',
  lastName: 'Bertino',
  age: 19
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';
console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);
console.log(student); // student object was in screenshot on instruction page, but not in written instructions

/*

    VEHICLE

*/

const vehicle = {
  make: 'Lexus',
  model: 'LC',
  year: 2023
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log(vehicle);

/*

    PET

*/

const pet = {
  name: 'bear',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('pet:', pet);
