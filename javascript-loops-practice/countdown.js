/* exported countdown */

function countdown(number) {
  const arr = [];
  while (number >= 0) {
    arr.push(number);
    number--
  }
  return arr;
}