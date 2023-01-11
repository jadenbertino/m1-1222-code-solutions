/* exported invert */

/*
  create function invert that takes one argument: sourceObj (an object)
    create empty object literal and assign to variable newObj
    iterate through each key in sourceObj
      create variable called val to store the value of [key] property of sourceObj
      set [val] property of newObj to key 
    return newObj
*/

function invert(sourceObj) {
  const newObj = {}
  for (const key in sourceObj) {
    const val = sourceObj[key]
    newObj[val] = key
  }
  return newObj
}