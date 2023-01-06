/* exported filterOutStrings */

function filterOutStrings(values) {
  return values.filter(val => typeof val !== 'string');
}