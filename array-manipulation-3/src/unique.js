/* exported unique */

/*
  create function unique that takes one arg arr
    type check
    create empty arr uniqueElems
    iterate through each elem in unique
      if not in uniqueElems then push it
    return uniqueElems
*/

function unique(arr) {
  if (!Array.isArray(arr)) return 'invalid arg'
  const uniqueElems = []
  arr.forEach(e => {
    if (!uniqueElems.includes(e)) uniqueElems.push(e)
  })
  return uniqueElems
}