/* exported pick */
function pick(source, keys) {
  const obj = {};

  for (const key of keys) {
    if (source.hasOwnProperty(key)) {
      if (source[key] !== undefined) {
        obj[key] = source[key];
      }
    }
  }

  return obj;
}

console.log(pick())
