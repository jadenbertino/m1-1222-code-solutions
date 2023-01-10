/* exported getKeys */
/*
  ensure typeof is object
  create empty array
  use for... in to iterate through keys -> push to array
  return arr
*/
function getKeys(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) { return 'invalid'}
  const keys = []
  for (let key in obj) {
    keys.push(key)
  }
  return keys
}