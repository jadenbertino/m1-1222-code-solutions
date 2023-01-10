/* exported last */
/*
  ensure typeof array
  return array at index array.length - 1
*/

function last(arr) {
  return Array.isArray(arr) ? arr[arr.length - 1] : 'invalid'
}