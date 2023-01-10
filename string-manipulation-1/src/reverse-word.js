/* exported reverseWord */

function reverseWord(word) {
  if (typeof word !== 'string' || word.length === 0) {return 'invalid'}
  let newWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i]
  }
  return newWord
}