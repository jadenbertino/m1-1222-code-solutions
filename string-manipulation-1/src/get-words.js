/* exported getWords */

/* 
  ensure typeof str is 'string'
  if str length === 0 return []
  otherwise just split str by ' '
*/

function getWords(str) {
  if (typeof str !== 'string') { return 'invalid'}
  return str.length === 0 ? [] : str.split(' ')
}