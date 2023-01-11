/* exported reverseWords */

/*
  create function reverseWords that takes one arg: str (string)
    split str by ' ', store in variable words
    iterate through each word in words
      turn word into array of chars via split
      sort by -1 to reverse
      join chars to create reversed word
      add reversed word to array
    join array of reversed words with space in between each word, then return
*/

function reverseWords(str) {
  const words = str.split(' ')
  return words.map(word => word.split('').sort(() => -1).join('')).join(' ')
}