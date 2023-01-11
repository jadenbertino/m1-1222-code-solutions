/* exported includes */

/* 
  type check
  iterate through each item in array
    if matches value return true
  return false
*/

function includes(arr, val) {
  if (!Array.isArray(arr)) return 'invalid'
  for (item of arr) {
    if (item === val) return true
  }
  return false
  // note to self: return from forEach doesn't stop the loop
  // arr.forEach((item, i) => {
  //   return true
  // })
  // return false
}