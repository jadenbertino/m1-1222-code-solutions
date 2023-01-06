/* exported includesSeven */

function includesSeven(array) {
  for (let val of array) {
    if (val === 7) {
      return true;
    }
  }
  return false;
}