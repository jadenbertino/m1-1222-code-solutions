/* exported getLastChar */

/*
  if typeof str !== 'string' or str.length == 0 return 'invalid'
  otherwise return str at last index
*/
function getLastChar(str) {
  return (typeof str !== 'string' || str.length === 0) ?
    'invalid string' :
    str[str.length - 1]
}