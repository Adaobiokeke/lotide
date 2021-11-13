// import _, { map } from 'underscore';

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

const words = ["hello", "world", "lighthouse"];
function assertArraysEqual(array,values) {
    if (values === "lighthouse"){
          return _.without (array(values))
    }
}

  
// TEST CODE
// assertArraysEqual([1,2,0], [1, 2, 3]);
assertArraysEqual(words, ["hello", "world", "lighthouse"], 'lighthouse');



