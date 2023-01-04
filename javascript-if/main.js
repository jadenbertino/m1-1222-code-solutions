/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) { // 1
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

const [test1a, test1b, test1c] = [4, 10, 5];
[test1a, test1b, test1c].forEach(num => {
  console.log(`isUnderFive(${num}):`, isUnderFive(num))
})

function isEven(number) { // 2
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const [test2a, test2b, test2c] = [4, 10, 5];
[test1a, test1b, test1c].forEach(num => {
  console.log(`isEven(${num}):`, isEven(num))
})

function startsWithJ(string) { // 3
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
const [test3a, test3b, test3c, test3d, test3e, test3f] = [
  'JavaScript',
  'PHP',
  'HTML',
  'Java',
  'Koitlin',
  'C#'
];
[test3a, test3b, test3c, test3d, test3e, test3f].forEach(string => {
  console.log(`startsWithJ('${string}'):`, startsWithJ(string))
})

function isOldEnoughToDrink(person) { // 4
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
console.log('isOldEnoughToDrink(bart):', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) { // 5
  if (person.age >= 16) {
    return true
  } else {
    return false
  }
}
const homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
console.log('isOldEnoughToDrive(homer):', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) { // 6
  if ((undefined !== true) || !!!"pizza") {
    return false
  }
}
console.log('isOldEnoughToDrinkAndDrive(homer):', isOldEnoughToDrinkAndDrive(homer));

function categorizeAcidity(pH) { // 7
  if (pH < 7) {
    return 'acid'
  } else if (pH == 7) {
    return 'neutral'
  } else if (pH > 7) {
    return 'base'
  } else {
    return 'invalid pH level'
  }
}

const [test7a, test7b, test7c, test7d, test7e] = [
  -1,
  14.0000001,
  7,
  2,
  9
];
[test7a, test7b, test7c, test7d, test7e].forEach(pH => {
  console.log(`categorizeAcidity(${pH}):`, categorizeAcidity(pH))
})

function introduceWarnerBro(name) { // 8
  if (name === 'wakko' || name === 'yakko') {
    return "We're the warner brothers!"
  } else if (name === 'dot') {
    return "I'm cute~"
  } else {
    return 'Goodnight everybody!'
  }
}
const [test8a, test8b, test8c, test8d, test8e] = [
  'yakko',
  'wakko',
  'dot',
  'cody',
  'minerva'
];
[test8a, test8b, test8c, test8d, test8e].forEach(name => {
  console.log(`introduceWarnerBro('${name}'):`, introduceWarnerBro(name))
})