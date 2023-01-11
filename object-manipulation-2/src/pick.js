/* exported pick */

/*
  iterate through list of keys
  check if key in source && obj[key] is not undefined
    yes -> add to new object
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