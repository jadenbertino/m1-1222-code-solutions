/* exported invert */

/*
  newObj
  iterate through sourceObj keys
    store value
    set newObj[value] to key
  return newObj
*/

function invert(sourceObj) {
  const newObj = {}
  for (let key of Object.keys(sourceObj)) {
    const val = sourceObj[key]
    newObj[val] = key
  }
  return newObj
}