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

function length(array) {
    var counter = 0;
    for (var i =0; ; i++) {
        if(array[i]){
            counter++
        }else{
            break;
        }
    }
    return counter;
}
var array1= [1,2,3,4,5,6,7]


let numberArray= [1,2,3]
function middle(array) {
   let NewNumberArray= numberArray;
    let lengthArray = length(array)
    var middle_value =[]
   if(lengthArray % 2 == 0) {
    middle_value[0] = NewNumberArray[lengthArray /2 -1]
middle_value[1] = NewNumberArray[lengthArray /2]
   }else{
    middle_value[0] = NewNumberArray[lengthArray /2 - .5]
   }
   return middle_value
  }
  var value = middle(numberArray)
  console.log(value)
  
  // TEST CODE
//   assertArraysEqual([1,2,0], [1, 2, 3]);

  