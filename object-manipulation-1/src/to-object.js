/* exported toObject */

function toObject([key, val]) {
  if (typeof key !== 'string') {return 'invalid'}
  const obj = {}
  obj[key] = val
  return obj
}