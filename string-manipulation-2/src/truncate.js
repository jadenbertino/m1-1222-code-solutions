/* exported truncate */

/*
  check type of arguments
  if length !== str.length then slice + add '...'
  otherwise just return the str
*/

function truncate(length, str) {
  if (typeof length !== 'number' || typeof str !== 'string') { return 'invalid' }
  if (str.length !== length) {
    return str.slice(0, length) + '...'
  } 
  return str
}