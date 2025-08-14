var generateName = require("sillyname");
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// `` This is back tick present in rupees Symbol

// we can you import for ESM below there is the process
// please don't excute both on same time 
import superheroes from 'superheroes';
const name = superheroes.random();

console.log (`I am ${name}!`)
