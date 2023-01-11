/* exported defaults */

/*
  create function defaults that takes two objects as arguments: target and source
  iterate through each key in source
    if source key not in target object
      then add source key & vaue to target object
*/

function defaults(target, source) {
  for (const sourceKey in source) {
    if (!Object.keys(target).includes(sourceKey)) {
      target[sourceKey] = source[sourceKey]
    }
  }
}