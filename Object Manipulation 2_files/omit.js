/* exported omit */
const omit = (source , keys) =>{
  const obj = {}


    for (const key of source) {
      console.log(source[key])
    if (source.hasOwnProperty(key)) {
      if (source[key] === key) {
        delete source[key];
      }
    }
  }

  return obj;
}
console.log(omit())
