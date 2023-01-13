/* exported union */

/*
create function union that takes two params: first (array), second (array)
  create variable secondUnique
  iterate through each item in secondArr
    if item not in first 
      push item to secondUnique
  join first and secondUnique then return
*/

function union(first, second) {
  const secondUnique = second.filter(e => !first.includes(e));
  return [...first, ...secondUnique]
}