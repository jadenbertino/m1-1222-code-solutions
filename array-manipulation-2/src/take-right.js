/* exported takeRight */

/*
  type check
  if count > length then return shallow copy
  else slice from length - count to length
*/

function takeRight(arr, count) {
  if (!Array.isArray(arr) || typeof count !== 'number' || count < 0) return 'invalid'
  if (count >= arr.length) return arr.slice()
  return arr.slice(arr.length - count, arr.length)
}