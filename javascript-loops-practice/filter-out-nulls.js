/* exported filterOutNulls */

function filterOutNulls(values) {
  // return values.filter(val => val !== null)
  const filteredValues = [];
  for (let val of values) {
    if (val !== null) filteredValues.push(val);
  }
  return filteredValues;
}