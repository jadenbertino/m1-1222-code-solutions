/* exported isUpperCased */

/*
  ensure typeof word is string
  turn word into array of chars
  filter that array for just uppercase & alphabetical chars
  if that array.length > 0 then there are uppercase chars -> return false
*/

function isUpperCased(word) {
  if (typeof word !== 'string') {return 'invalid'}
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const lowerCaseChars = word.split('').filter(char => char.toLowerCase() === char && ALPHABET.includes(char))
  return lowerCaseChars.length === 0
}