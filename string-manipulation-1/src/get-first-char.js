/* exported getFirstChar */

/*
  check that typeof str is string and str.length !== 0 -> return false if either
  return str at 0
*/
function getFirstChar(str) {
  if (str.length === 0 || typeof str !== 'string') {
    return 'invalid input'
  } 
  return str[0]
}