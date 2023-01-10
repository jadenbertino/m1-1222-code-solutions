/* exported getWords */

function getWords(str) {
  return str.length === 0 ? [] : str.split(' ')
}