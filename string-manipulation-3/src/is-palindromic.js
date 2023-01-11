/* exported isPalindromic */

/*
  create function isPlandromic that takes one arg: word (string)
    filter out any spaces from word, assign to variable wordNoSpaces
    reverse string via any of the methods below then store in variable reverseWord
      a) for loop from length-1 to 0 -> append each char to new string
      b) for each -> unshift each char to new string
      c) sort(-1)
    return wordNoSpaces equal to reverseWord
*/

function isPalindromic(word) {
  const wordNoSpaces = word.split('').filter(c => c !== ' ').join('')
  const reverseWord = wordNoSpaces.split('').sort(() => -1).join('');
  return wordNoSpaces === reverseWord
}