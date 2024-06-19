let num = 5;

const changeNumber = function(number) {
  number = 10,
  console.log("Inside of function", number);
}

console.log("Number before the function", num);
changeNumber(num);
console.log("Number after the function", num);