/* exported setValue */
/*
  ensure typeof is object
  set key prop of object to value
*/
function setValue(obj, key, val) {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) { return 'invalid'}
  obj[key] = val
}
