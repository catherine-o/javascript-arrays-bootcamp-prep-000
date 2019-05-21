var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const result = [`${element}`, ...array];
  return result;
} 

function destructivelyAddElementToBeginningOfArray(array, element) {
  var modify = array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  const result2 = [...array, element];
  return result2;
}

