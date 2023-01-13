/* exported equal */

/*
  create function equal with two params: first (array), second (array)
  check that type of both params are array, if not then return 'invalid'

  method 1
  filter first by checking that each item is equal to the same index at second array -> store in 'difference' array
  return length of difference array converted to boolean


  method 2 (unused)
  check that arrays are equal length, if not return false
  iterate through first array via index
    compare first at index to second at index
      if not equal return false
  return true
*/
function equal(first, second) {
  if (!Array.isArray(first) || !Array.isArray(second)) return 'invalid args'
  if (first.length !== second.length) return false;
  const difference = first.filter((e, i) => e !== second[i])
  return !!!difference.length
}