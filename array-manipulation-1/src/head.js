/* exported head */

/*
  check is array
  return array at  0
*/

function head(arr) {
  return Array.isArray(arr) ? arr[0] : 'invalid'
}