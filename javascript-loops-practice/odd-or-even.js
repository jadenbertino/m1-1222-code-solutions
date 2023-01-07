/* exported oddOrEven */

function oddOrEven(numbers) {
  // return numbers.map(number => number % 2 === 0 ? 'even' : 'odd')
  const oddEvenArr = [];
  for (let num of numbers) {
    oddEvenArr.push(num % 2 === 0 ? 'even' : 'odd')
  }
  return oddEvenArr
}