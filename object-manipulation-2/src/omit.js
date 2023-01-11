/* exported omit */

/*
  iterate through keys in obj
  check if key NOT in source 
    yes -> add to new object
*/

function omit(obj, keys) {
  const newObj = {}
  Object.keys(obj).forEach(key => {
    if (!keys.includes(key)) {
      newObj[key] = obj[key]
    }
  })
  return newObj
}