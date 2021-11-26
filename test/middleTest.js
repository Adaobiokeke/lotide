const {middle,length} = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
let value1 = [1,2,3,4,5,6,7];
const result1=middle(value1)

let value2 = [2,4,6,8,10,12]
const result2 = middle(value2)
console.log(result2) ;

// const assert = require('chai').assert;
// const {middle,length }= require('../middle');

// let value2 = [2,4,6,8,10,12]
// const result2 = middle(value2)

// describe("#middle", () => {
//     it("returns 2,3 value for [2,4,6,8,10,12]", () => {
//       assert.strictEqual(middle(result2),[2,3]);
//     });
// });