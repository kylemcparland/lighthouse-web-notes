//// -- 1. filter:
// Iterates over an ARRAY, performing a check function over each
// value which returns TRUE or FALSE. Creates a new (shorter)
// array of the values which return TRUE.

const animals = [
  { name: "Ovid", species: "cat" },
  { name: "Rusty", species: "dog" },
  { name: "Pandora", species: "dog" }
];

const dogs = animals.filter(animal => {
  return animal.species === "dog";
});

// -- The same function but with its callback decoupled:

const isCat = animal => animal.species === "cat";

const cats = animals.filter(isCat);

console.log("--- .filter");
console.log("dogs =", dogs);
console.log("cats =", cats);
console.log("\b");



//// -- 2. map:
// Iterates over an ARRAY, performing a function over each value
// which TRANSFORMS the value. Returns a new array which includes
// all original values, transformed.

const animalNames = animals.map(animal => {
  return animal.name;
});

//shorter with arrow:
const animalNames2 = animals.map(animal => animal.name);

console.log("--- .map");
console.log("animalNames =", animalNames);
console.log("animalNames =", animalNames2);
console.log("\b");



//// -- 3. map:
// Iterates over an ARRAY, performing a check function over each
// value which returns TRUE or FALSE. Returns the FIRST value
// which returns true.

const ovid = animals.find(animal => {
  return animal.name === "Ovid";
});

console.log("--- .find");
console.log("ovid =", ovid);
console.log("\b");



//// -- 4. reduce:
// The multi-tool of list transformations.

const orders = [
  { amount: 850 },
  { amount: 250 },
  { amount: 80 },
  { amount: 25 }
];

// sum = 0 = our initializing value. On the second loop,
// it becomes the returned value of the first loop, etc.
// order = the value we are iterating over.
// the return is performed with the final result.

const total = orders.reduce(function(sum, order) {
  console.log("Sum", sum, order);
  return sum + order.amount;
}, 0);

// shorter with arrow:

const totalArrow = orders.reduce((sum, order) => sum + order.amount, 0);

console.log("total.reduced =", total);
console.log("total.reduced =", totalArrow);