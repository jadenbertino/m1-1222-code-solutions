/* exported chunk */

/*
  type check
  don't use .slice for bonus points
  iterate through arr
  push to holdArr 
  check if holdArr % size === 0 OR last index
    if yes then push holdArr to returnArr & set holdArr to []
  return holdArr
*/

function chunk(arr, size) {
  if (!Array.isArray(arr) || typeof size !== 'number' || size < 0) return 'invalid'

  // No .slice solution
  const chunkedArr = []
  let holdArr = []
  for (let i = 0; i < arr.length; i++) {
    holdArr.push(arr[i])
    if (holdArr.length % size === 0 || i === arr.length - 1) {
      chunkedArr.push(holdArr)
      holdArr = []
    }
  }
  return chunkedArr
  
  // .slice solution
  // const chunked = []
  // for (let i = 0; i < arr.length; i += size) {
  //   chunked.push(arr.slice(i, i + size))
  // }
  // return chunked;
}