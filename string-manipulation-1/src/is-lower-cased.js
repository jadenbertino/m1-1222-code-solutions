/* exported isLowerCased */

function isLowerCased(word) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const upperCaseChars = word.split('').filter(char => char.toUpperCase() === char && ALPHABET.includes(char))
  return upperCaseChars.length === 0
}