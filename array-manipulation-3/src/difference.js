/* exported difference */

/*
create function difference that takes two params: first (array), second (arra)
  create empty array and assign to variable firstUnique
  iterate through each item in first array
    if item not in second array push to firstUnique
  create empty array and assign to variable secondUnique
  iterate through each item in second array
    if item not in first array push to secondUnique
  combine firstUnique and secondUnique then return
*/

function difference(first, second) {
  const firstUnique = first.filter(e => !second.includes(e))
  const secondUnique = second.filter(e => !first.includes(e))
  return [...firstUnique, ...secondUnique]
}