const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    // read the json files and pull the data

    //dog
    const dog = await readFileAsync("dog.json", "utf8");
    console.log("dog = ", dog);
    const dogJSON = JSON.parse(dog);
    //Json parse
    console.log("dog = ", dogJSON.name);

    // cat
    const cat = await readFileAsync("cat.json", "utf8");
    console.log("cat = ", cat);
    const catJSON = JSON.parse(cat);
    // Json parse
    console.log("cat = ", catJSON.name);

    // goldfish
    const goldfish = await readFileAsync("goldfish.json", "utf8");
    console.log("goldfish = ", goldfish);
    const goldfishJSON = JSON.parse(goldfish);
    //Json parse
    console.log("goldfish = ", goldfishJSON.name);

    // hamster
    const hamster = await readFileAsync("hamster.json", "utf8");
    console.log("hamster = ", hamster);
    const hamsterJSON = JSON.parse(hamster);
    //Json parse
    console.log("hamster = ", hamsterJSON.name);

    // combine the data into an array

    const combinedArr = [];
    combinedArr.push(dogJSON, catJSON, goldfishJSON, hamsterJSON);
    console.log("combinedArr = ", combinedArr);

    //Json stringify

    const combinedArrString = JSON.stringify(combinedArr, null, 2);
    console.log("stingified = ", combinedArrString);

    // write file to a new combined.json

    writeFileAsync("combined.json", combinedArrString);
    console.log("Success!");
  } catch (err) {
    console.log(err);
  }
}

combineAnimals();
