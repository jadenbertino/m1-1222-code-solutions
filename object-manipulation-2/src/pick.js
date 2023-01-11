/* exported pick */

/*
  create function pick which two args: obj (object) and keys (array of strings)
  create empty array literal and store in newObj variable
  iterate through each key in keys variable
    check if key in source && obj[key] is not undefined
      yes -> set key property of newObj to key property of obj
*/

function pick(obj, keys) {
  const newObj = {}
  keys.forEach(key => {
    if (Object.keys(obj).includes(key) && obj[key] !== undefined) {
      newObj[key] = obj[key]
    }
  })
  return newObj
}