/* exported firstChars */

/*
  type checks
  slice from 0 to length
*/
function firstChars(length, str) {
  if (typeof length !== 'number' || length < 0 || typeof str !== 'string') return 'invalid'
  return str.slice(0, length)
}