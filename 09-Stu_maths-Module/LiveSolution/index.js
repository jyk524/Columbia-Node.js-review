// Depencies =========================================
// node modules
var maths = require("./maths.js");
// data
// number 1
var num1 = parseInt(process.argv[3]);
// number 2
var num2 = parseInt(process.argv[4]);
// operator
var operator = process.argv[2];

// what is the operator?
switch (operator) {
  case "sum":
    // sum? do addition
    console.log(maths.add(num1, num2));
    break;
  case "difference":
    // difference? do subtraction
    console.log(maths.subtract(num1, num2));
    break;
  case "product":
    // product? do multiplication
    console.log(maths.multiply(num1, num2));
    break;
  // quotient? do division
  case "quotient":
    console.log(maths.divide(num1, num2));
    break;
}
