module.exports = {
  sum: sum,
  difference: difference,
  product: product,
  quotient: quotient,
};

num1 = parseInt(process.argv[3]);
num2 = parseInt(process.argv[4]);

function sum(num1, num2) {
  return num1 + num2;
}
function difference(num1, num2) {
  return num1 - num2;
}
function product(num1, num2) {
  return num1 * num2;
}
function quotient(num1, num2) {
  return num1 / num2;
}
