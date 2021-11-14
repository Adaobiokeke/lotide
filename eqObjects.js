const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("✅ " + " true");
      } else {
        console.log("🛑 " + " false");
      }
    };

    
    const eqObjects = function(object1, object2) {
        if (object1.length !== object2.length){
            return false;
        }
        for (let i = 0; i < object1.length; i++) {
            if(object1[i] !== object2[i]){
                return false;
            }
        }
        return "true";
    };

    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    eqObjects(ab, ba);  