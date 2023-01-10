/* exported initial */

/*
  ensure type
  filter by index
*/

function initial(arr) {
  if (!Array.isArray(arr)) { return 'invalid' }
  const newArr = arr.filter((e, i) => i !== arr.length - 1)
  return newArr
}