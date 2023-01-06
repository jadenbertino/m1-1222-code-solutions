/* exported countdown */

function countdown(number) {
  let count = number;
  const arr = [];
  while (count >= 0) {
    arr.push(count);
    count--
  }
  return arr;
}