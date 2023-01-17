/* exported zip */

/*
  create function zip that takes two args: first (array), second (array)
    type check
    compare length of first and second array
    create empty array zipped to hold return value
    first is shorter
      iterate through each elem + index
        push current elem + second array at index to return arr
    second is shorter
        iterate through each elem + index
          push first array at index + current elem to return arr
*/

function zip(first, second) {
  if (!Array.isArray(first) || !Array.isArray(second)) return 'invalid args'
  if (first.length < second.length) {
    return first.map((e, i) => [e, second[i]])
  } 
  return second.map((e, i) => [first[i], e])
}