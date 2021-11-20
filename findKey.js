const assertEqual = function(actual, expected) {
    return actual === expected
    };
    
    
    
    
    
    const findKey =function(obj, callback) {
        const ObjValues = Object.values(obj);
        const ObjKeys = Object.keys(obj);
        let matchIndex
        for (let i = 0; i < ObjValues.length; i++){
            if (callback(ObjValues[i])){
                matchIndex = i;
                break;
            }
        }
        return matchIndex ? ObjKeys[matchIndex] : undefined
    }


    // TEST CODE
    
    // console.assert(assertEqual(4 ,4), "this is correct")
    // console.assert(assertEqual("1",5), "Absolutely wrong")
    // console.assert(assertEqual("Lighthouse Labs", "Bootcamp"), "this is wrong")
    // console.assert(assertEqual("Lighthouse Labs", "Lighthouse Labs"), "this is right")

    const x = findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2)
      console.assert(assertEqual(x,2), "great")