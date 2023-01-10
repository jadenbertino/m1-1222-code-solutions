/* exported lastChars */

/*
  type checks
  slice from length to str.length
    handle if length > str.length (in that case slice from 0 not a negative number)
*/

function lastChars(length, str) {
  if (typeof length !== 'number' || length < 0 || typeof str !== 'string') return 'invalid'
  if (length > str.length) {
    return str.slice(0, str.length)
  } else {
    return str.slice(str.length - length, str.length)
  }
}