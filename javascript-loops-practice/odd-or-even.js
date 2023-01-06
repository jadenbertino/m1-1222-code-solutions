/* exported oddOrEven */

function oddOrEven(numbers) {
  return numbers.map(number => number % 2 === 0 ? 'even' : 'odd')
}