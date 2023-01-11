/* exported take */

/*
  type check
  slice from start to count
*/

function take(arr, count) {
  if(!Array.isArray(arr) || count < 0) return 'invalid'
  return arr.slice(0, count)
}