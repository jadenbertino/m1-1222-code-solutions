function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

function greet(name) {
  return `Hola ${name}, como estas?`;
}
console.log('greet("Ryan"):', greet('Ryan'));

function getArea(width, height) {
  return width * height;
}
console.log('getArea(17, 42):', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log("getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }):", getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1]
}
console.log("getLastElement(['propane', 'and', 'propane', 'accessories']):", getLastElement(['propane', 'and', 'propane', 'accessories']));

