const fs = require("fs");

fs.readFile("animals.json", "utf8", function (err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = animalJSON.filter(({ species }) => species === "dog");

  const cats = animalJSON.filter(({ species }) => species === "cat");

  console.log(dogs);
  fs.writeFile("dogs.json", JSON.stringify(dogs, null, 2), function () {
    console.log("Success");
  });
  console.log(cats);
  fs.writeFile("cats.json", JSON.stringify(cats, null, 2), function () {
    console.log("Success");
  });
});
