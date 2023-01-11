/* exported capitalizeWord */

/*
  argument type
  JavaScript
  word index 0 uppercase + word slice 1 lowercase
*/

function capitalizeWord(word) {
  if (typeof word !== 'string') { return 'invalid' }
  if (word.toLowerCase() === 'javascript') { return 'JavaScript'}
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}