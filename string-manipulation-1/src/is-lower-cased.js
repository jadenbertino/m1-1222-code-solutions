/* exported isLowerCased */

/*
  ensure typeof word is string
  turn word into array of chars
  filter that array for just lowercase & alphabetical chars
  if that array.length > 0 then there are lowercase chars -> return false
*/

function isLowerCased(word) {
  if (typeof word !== 'string') {return 'invalid'}
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const upperCaseChars = word.split('').filter(char => char.toUpperCase() === char && ALPHABET.includes(char))
  return upperCaseChars.length === 0
}