/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// 1
function isUnderFive(number) { 
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

// 2
function isEven(number) { 
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

// 3
function startsWithJ(string) { 
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

// 4
function isOldEnoughToDrink(person) { 
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

// 5
function isOldEnoughToDrive(person) { 
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

// 6
function isOldEnoughToDrinkAndDrive(person) { 
  if ((undefined !== true) || !!!"pizza") {
    return false
  }
}
console.log('isOldEnoughToDrinkAndDrive(homer):', isOldEnoughToDrinkAndDrive(homer));

// 7
function categorizeAcidity(pH) { 
  if (pH >= 0 && pH < 7) {
    return 'acid'
  } else if (pH == 7) {
    return 'neutral'
  } else if (pH > 7 && pH <= 14) {
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

// 8
function introduceWarnerBro(name) { 
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