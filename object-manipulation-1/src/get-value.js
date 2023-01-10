/* exported getValue */

/*
  ensure typeof is object
  return key property of object via brackets so you can pass variable name
*/

function getValue(obj, key) {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) { return 'invalid'}
  return obj[key]
}