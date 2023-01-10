/* exported reverse */

/*
  ensure type 
  create empty array
  use map to unshift elements 
*/

function reverse(arr) {
  if (!Array.isArray(arr)) { return 'invalid' }
  newArr = []
  arr.map(e => newArr.unshift(e))
  return newArr
}