/* exported getIndexes */

function getIndexes(array) {
  // return array.map((item, ind) => ind)
  const indexes = [];
  for (let i = 0; i < array.length; i ++) {
    indexes.push(i);
  }
  return indexes;
}