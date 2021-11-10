const assertEqual = function(a, b) {
return a === b
};



// TEST CODE

console.assert(assertEqual(4 ,4), "this is correct")
console.assert(assertEqual("1",5), "Absolutely wrong")
console.assert(assertEqual("Lighthouse Labs", "Bootcamp"), "this is wrong")
console.assert(assertEqual("Lighthouse Labs", "Lighthouse Labs"), "this is right")
