/**
 * Created by smozingo on 2/17/17.
 */
let obj = {
  variable1: 'level1 string',
  variable2: 1,
  array1: [1, 2, 3],
  object1: { array2: [4, 5, 6] },
};

function clone(thing) {
  if (!thing) return thing; // handle null, undefined, other falsies

  // here's what we'll return
  let result;

  if (Array.isArray(thing)) {
    result = []; // result is an array
    thing.forEach((el, index) => result[index] = clone(el));
  } else if (typeof thing === 'object') {
    result = {}; // result is an object
    for (let key in thing) {
      // make sure the key is a direct property of the object
      if (thing.hasOwnProperty(key)) {
        result[key] = clone(thing[key]);
      }
    }
  } else {
    // we're primitive, just set result
    result = thing;
  }

  return result;
}

console.log(clone(obj));
/*

  function objHandler(obj) {
    result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = parse(obj[key]);
      }
    }

    return clone;
  }

  function arrayHandler(array) {
    result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(parse(array[i]));
    }

    return clone;
  }

  function parse(value) {
    if (Array.isArray(value)) {
      result.push(arrayHandler(value));
    } else if (typeof value === 'object') {
      result.push(objHandler(value));
    } else {
      return value;
    }
  }
*/



