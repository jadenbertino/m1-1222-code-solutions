/* exported intersection */

/*
create function intersection that takes two params: first (array), second (arra)
  create empty array and assign to variable firstIntersection
  iterate through each item in first
    if item in second array push to firstIntersection
  create empty array and assign to variable secondIntersection
  iterate through each item in second array
    if item in first array and NOT in firstIntersection then push to secondIntersection
  combine firstUnique and secondIntersection then return
*/

function intersection(first, second) {
  const firstIntersection = first.filter(e => second.includes(e))
  const secondIntersection = second.filter(e => first.includes(e) && !firstIntersection.includes(e))
  return [...firstIntersection, ...secondIntersection]
}