/* exported drop */

/*
  type check
  slice from count until end of arr
*/

function drop(arr, count) {
  if (!Array.isArray(arr) || count < 0 ) return 'invalid'
  return arr.slice(count, arr.length)
}