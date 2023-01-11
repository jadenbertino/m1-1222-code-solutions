/* exported isAnagram */

/*
  create function isAnagram that takes two args: firsStr (string) and secondStr (string)
  filter out any spaces

  method 1
  iterate through each char in first word
    if char not in second word
      return false
    else 
      remove char from first second word
  if second word length === 0 return true 

  method 2 (unused)
  convert first word into object with property for each char and count
  convert second word into object
  iterate through keys of first word object, check that they match second word object
    any mismatch = return false
  return true
*/

function isAnagram(firstStr, secondStr) {
  firstStr = firstStr.split('').filter(char => char !== ' ').join('')
  secondStr = secondStr.split('').filter(char => char !== ' ').join('')
  for (let i = 0; i < firstStr.length; i++) {
    const char = firstStr[i]
    const ind = secondStr.indexOf(char)
    if (ind === -1) return false
    secondStr = secondStr.replace(char, '')
  }
  return secondStr.length === 0
}