let a = process.argv[2];
let b = process.argv[3];

if (a === b) {
  console.log(true);
} else {
  console.log(false);
}

console.log("2", process.argv[2]);
console.log("3", process.argv[3]);

console.log("a", a);