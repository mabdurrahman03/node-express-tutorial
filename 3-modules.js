// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative_flavor');
console.log(names);
require('./7-mind_grenade');

sayHi('Muh');
sayHi(names.name1);
sayHi(names.name2);