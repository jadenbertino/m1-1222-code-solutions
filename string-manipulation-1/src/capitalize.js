/* exported capitalize */

/*
  if typeof word !== string OR word.length === 0 
    return invalid
  return first char capitalized + rest of string lowercase
*/

function capitalize(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return 'invalid input'
  } 
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}