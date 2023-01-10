/* exported capitalizeWords */

/*
  type check
  split
  capitalize each word 
    index 0 -> capitalize
    slice 1 -> lowercase
*/

function capitalizeWords(str) {
  return typeof str !== 'string' || str.length === 0 ? 'invalid' : str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
}