/* exported includesSeven */

function includesSeven(array) {
  let hasSeven = false;
  for (let val of array) {
    if (val === 7) {
      hasSeven = true;
    }
  }
  return hasSeven;
}