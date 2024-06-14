// console.log(process.argv)

// const array = process.argv.splice(0, 2)
const array = process.argv.slice(2)

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

let total = 0;

for (const value of array) {
  const converted = Number(value);
  if (converted > 0 && Number.isInteger(converted)) {
    total += converted;
  }
}

console.log("total: ", total)

// for (const index in array) {
//   console.log(array[index])
// }