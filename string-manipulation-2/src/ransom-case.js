/* exported ransomCase */

/*
  split chars
  map
    even index -> lowercase
    odd index -> uppercase
  join
*/

function ransomCase(str) {
  // readability is overrated imo
  return typeof str !== 'string' ? 'invalid' : str.split('').map((char, i) => i % 2 === 1 ? char.toUpperCase() : char.toLowerCase()).join('')
}