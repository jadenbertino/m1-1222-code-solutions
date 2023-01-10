/* exported numVowels */

/*
  split
  filter -> check if vowel by checking if 'aeiou' includes char
  return length of filtered arr
*/
function numVowels(str) {
  return typeof str !== 'string' ? 'invalid' : str.split('').filter(char => 'aeiou'.includes(char.toLowerCase())).length
}