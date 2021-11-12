const assertEqual = function (a, b) {
  return a === b;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      console.log(item);
    }

    return results;
  }
};

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// TEST CODE

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// console.assert(assertEqual(4 ,4), "this is correct")
// console.assert(assertEqual("1",5), "Absolutely wrong")
// console.assert(assertEqual("Lighthouse Labs", "Bootcamp"), "this is wrong")
// console.assert(assertEqual("Lighthouse Labs", "Lighthouse Labs"), "this is right")
