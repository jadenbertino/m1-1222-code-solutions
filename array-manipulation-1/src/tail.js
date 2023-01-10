/* exported tail */

/*
  ensure typeof 
  filter by index
*/

function tail(arr) {
  if (!Array.isArray(arr)) { return 'invalid' }
  return arr.filter((e, i) => i !== 0)
}