const assertEqual =require('./assertEqual');


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
module.exports =eqArrays
// TEST CODE



