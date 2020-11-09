const fs = require("fs");

fs.readFile("animals.json", "utf8", function (err, data) {
  if (err) {
    throw err;
  }

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  //for of loop to add animals to dogs and cats arrays
  for (const animal of animalJSON) {
    if (animal.species === "dog") {
      dogs.push(JSON.stringify(animal));
    }
    cats.push(JSON.stringify(animal));
  }
  console.log("dogs =", dogs);
  console.log("cats =", cats);
});
