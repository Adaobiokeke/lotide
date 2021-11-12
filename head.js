const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑Assertion Failed: " + actual + " !== " + expected);
  }
};



function head(headARR) {
  return headARR[0];
}

assertEqual(head([4, 5, 6]), 4);
