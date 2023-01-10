/* exported isUpperCased */

function isUpperCased(word) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const lowerCaseChars = word.split('').filter(char => char.toLowerCase() === char && ALPHABET.includes(char))
  return lowerCaseChars.length === 0
}