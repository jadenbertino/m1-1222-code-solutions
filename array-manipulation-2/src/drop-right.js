/* exported dropRight */

/*
  type checks
  slice from 0 to arr.length - count
*/

function dropRight(arr, count) {
  if (!Array.isArray(arr) || typeof count !== 'number' || count < 0) return 'invalid'
  return arr.slice(0, arr.length - count)
}