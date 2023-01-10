/* exported getLastChar */
function getLastChar(str) {
  return str.length === 0 ? 'invalid string' : str[str.length - 1]
}