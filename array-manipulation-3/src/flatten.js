/* exported flatten */

/*
  create function flatten that takes one param arg (arr)
    create empty array called flat
    iterate through each array elem
      if elem is array then push spread to flat
      else push elem to flat
*/

function flatten(arr) {
  if (!Array.isArray(arr)) return 'invalid arg'
  const flat = []
  arr.forEach(e => {
    if (Array.isArray(e)) flat.push(...e)
    else flat.push(e)
  })
  return flat
}