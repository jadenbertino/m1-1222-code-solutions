/* exported defaults */

/*
  iterate through source object keys
  if that key not in target keys then add to it
*/

function defaults(target, source) {
  for (let sourceKey of Object.keys(source)) {
    if (!Object.keys(target).includes(sourceKey)) {
      target[sourceKey] = source[sourceKey]
    }
  }
}