// dependencies
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
    console.log(maths.sum(num1, num2));
    break;

  case "difference":
    console.log(maths.difference(num1, num2));
    break;

  case "product":
    console.log(maths.product(num1, num2));
    break;

  case "quotient":
    console.log(maths.quotient(num1, num2));
    break;

  default:
    "xxxxxxxxxx";
    return;
}
