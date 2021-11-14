const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log("✅ " + " true");
      } else {
        console.log("🛑 " + " false");
      }
};

function findKeyByValue(object, value) {
for (const key in object) {
    if(object[key] === value){
    return key
    }
}
return;
}

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
};


// TEST CODE

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"),"drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"),"undefined");
