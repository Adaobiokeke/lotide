var _ = require('underscore')

const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log("✅ " + " true");
    } else {
      console.log("🛑 " + " false");
    }
  };

  function eqArrays(arr1, arr2) {
    //check if the length of the arrays are equal
    if (arr1.length !== arr2.length){
        return false;
    }

    // Check if the elements in the arrays are equal
    for (let i = 0; i < arr1.length; i++) {
        
        // Check if the elements are not equal
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
}
  function assertArraysEqual(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log(`Assertion Passed:array ${arr1} matches array ${arr2}`);
    } else {
        console.log(`Assertion Failed:array ${arr1} does not match array ${arr2}`);
    }
}
function without(arr,values){

    console.log(_.without(arr,...values));

}
  // TEST CODE
//   assertArraysEqual([1,2,0], [1, 2, 3]);
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, '3']) // => ["1", "2"]
  
  
  