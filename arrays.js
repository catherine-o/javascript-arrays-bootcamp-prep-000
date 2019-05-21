var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  const result = [`${element}`, ...array];
  return result;
} 

function destructivelyAddElementToBeginningOfArray(array, element) {
  var modify = array.unshift(element);
=======
  var array = [1];
  array.unshift("foo")
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = ['foo', 1]
>>>>>>> d599fb89ba3eb2e5f590433d2903a8a9ef37226e
  return array;
}

