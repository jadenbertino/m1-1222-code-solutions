/* exported toObject */

function toObject([key, val]) {
  return (typeof key !== 'string') ? 'invalid' : { [key]: val }
}