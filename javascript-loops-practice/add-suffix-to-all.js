/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  // return words.map(word => word + suffix)
  const suffixes = [];
  for (let word of words) {
    suffixes.push(word + suffix)
  }
  return suffixes
}