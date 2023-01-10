/* exported getValues */
/*
  ensure typeof is object
  create empty array
  use for... in to iterate through keys -> push obj[key] to array
  return arr
*/
function getValues(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) { return 'invalid'}
  const values = []
  for (let key in obj) {
    values.push(obj[key])
  }
  return values
}