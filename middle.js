const assertArraysEqual = require('./assertArraysEqual');


function length(array) {
  var counter = 0;
  for (var i = 0; ; i++) {
    if (array[i]) {
      counter++;
    } else {
      break;
    }
  }
  return counter;
}
 var array1 = [1, 2, 3, 4, 5, 6, 7];

let numberArray = [ 2, 3,5,7,9];

function middle(array) {
  let NewNumberArray = numberArray;
  let lengthArray = length(array);
  let middle_value = [];
  if (lengthArray % 2 == 0) {
    middle_value[0] = NewNumberArray[lengthArray / 2 - 1];
    middle_value[1] = NewNumberArray[lengthArray / 2];
  } else {
    middle_value[0] = NewNumberArray[lengthArray / 2 - 0.5];
  }
  return middle_value;
}
module.exports = {middle,length}


