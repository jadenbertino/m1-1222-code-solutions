/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++
  }
  return numbers
}

console.log('getNumbersToTen():', getNumbersToTen())
console.log('getNumbersToTen():', getNumbersToTen())

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers
}

console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());
console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = ''
  while (count <= times) {
    repeated += word;
    count++
  }
  return repeated;
}

console.log("repeatWord('watashi', 3):", repeatWord('watashi', 3));

function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

['', 'jaden', 'i am here'].forEach((str) => {
  console.log(`logEachCharacter('${str}'):`);
  console.log(logEachCharacter(str));
})

function doubleAll(numbers) {
  // return numbers.map(num => num * 2)
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2)
  }
  return doubled
}

[
  [1, 3, 13, 22],
  [42, 11, 19, 92],
  [0, 1, 1, 2, 3, 5, 8]
].forEach((arr) => {
  console.log(`doubleAll(${arr}):`, doubleAll(arr))
})

function getKeys(obj) {
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys
}

const testObjects = [
  {
    age: 19,
    hair: 'brown',
    height: '70in',
    sex: 'male'
  },
  {
    model: 'gtr',
    make: 'nissan',
    hp: 1000
  },
  {
    name: 'elden ring',
    releaseYear: 2022,
    genre: 'rpg',
    rating: 's tier'
  }
]

console.log('testObjects:', testObjects);

testObjects.forEach((obj, ind) => {
  console.log(`getKeys(${ind}):`, getKeys(obj))
})

function getValues(obj) {
  const values = [];
  for (let key in obj) {
    values.push(obj[key])
  }
  return values
}

testObjects.forEach((obj, ind) => {
  console.log(`getValues(${ind}):`, getValues(obj))
})