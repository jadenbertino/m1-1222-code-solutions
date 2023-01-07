/* exported sumAll */

function sumAll(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  // let sum = 0;
  // for (let num of numbers) {
  //   sum += num
  // }
  // return sum;
}