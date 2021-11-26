const eqArrays = require('./eqArrays');

  function assertArraysEqual(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log(`Assertion Passed:array ${arr1} matches array ${arr2}`);
    } else {
        console.log(`Assertion Failed:array ${arr1} does not match array ${arr2}`);
    }
}
  
module.exports = assertArraysEqual;
 
  
  
  