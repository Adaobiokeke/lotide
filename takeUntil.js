
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
    
    function takeUntil(arr, callback) {
        let results = [];
        for (let x of arr){
             if (callback(x)) break;
            results.push(x)
        }
        return results
    }
    
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);

 const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
    
assertArraysEqual(results1,results2);


