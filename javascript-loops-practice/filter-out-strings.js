/* exported filterOutStrings */

function filterOutStrings(values) {
  // return values.filter(val => typeof val !== 'string');
  const filteredValues = [];
  for (let val of values) {
    if (typeof val !== 'string') filteredValues.push(val);
  }
  return filteredValues
}