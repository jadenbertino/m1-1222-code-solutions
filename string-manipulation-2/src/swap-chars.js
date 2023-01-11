/* exported swapChars */

/*
  get firstChar
  get secondChar
  arr index1 = char2
  arr index2 = char1
*/

function swapChars(firstInd, secondInd, str) {
  if (typeof firstInd !== 'number' || typeof secondInd !== 'number' || typeof str !== 'string') return 'invalid'
  const firstChar = str[firstInd]
  const secondChar = str[secondInd]
  const arr = str.split('')
  arr[firstInd] = secondChar
  arr[secondInd] = firstChar
  return arr.join('')
}