const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅ " + " true");
  } else {
    console.log("🛑 " + " false");
  }
};



const eqObjects = function (object1, object2) {
    if (!object1 || !object2) {
        return false;
    }
    return (
        Object.keys(object1).length === Object.keys(object2).length &&
        Object.entries(object1).every(([key, value]) => {
            if (typeof value === "object") {
                return eqObjects(value, object2[key]);
            }
            return key in object2 && object2[key] === value;
        })
        );
    };

// This works fine with shallow objects
// const eqObjects = function (object1, object2) {
//    const object1Keys = Object.keys(object1);
//     const object2keys = Object.keys(object2);

//     if (object1Keys.length === object2keys.length) {
//         return false;
//     }

//     for(let objkey of object1Keys) {
//         if(object1[objkey] !== object2[objkey]) {
//             return false;
//         }
//     }
//     return true
// }


//TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc)); 
console.log(eqObjects(ab, ba));
console.log(eqObjects(cd, cd2));
console.log(eqObjects(dc, ba));

