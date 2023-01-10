/* exported isVowel */

function isVowel(char) {
  return typeof char === 'string' ? 'aeiouy'.includes(char.toLowerCase()) : 'invalid'
}