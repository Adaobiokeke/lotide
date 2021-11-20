const results = [];
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
    
    const words = ["ground", "control", "to", "major", "tom"];
    
    const map = function(array, callback) {
        for (let item of array) {
          results.push(callback(item));
        }
        return results;
      }
    // TEST CODE

     const results1 = map(words, word => word[0]);
     assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);                        
