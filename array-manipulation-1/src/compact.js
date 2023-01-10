/* exported compact */

/*
  assuming it filters out falsy values
  create empty array called newArr
  iterate through each item in array
    if it is truthy then push to newArr
  return newArr
*/
function compact(arr) {
  if (!Array.isArray(arr)) { return 'invalid' }
  const newArr = []
  arr.forEach(e => e ? newArr.push(e) : null)
  return newArr
}