// 1. Using array
const songs = ["Bad Guy", "Old Town Road", "7 Rings"];

for (const song of songs) {
  console.log(song);
}
// Bad Guy
// Old Town Road
// 7 Rings

// 2. Using map
const songs = new Map([
  ["Bad Guy", 1],
  ["Old Town Road", 2],
]);

for (const [key, value] of songs) {
  console.log(`${key}'s chart position is ${value}`);
}
// Output:
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2
