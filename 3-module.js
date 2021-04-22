const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')

const uncleBob = require('./6-alternative-flavor')

console.log(uncleBob.items);
console.log(uncleBob.singlePerson);

// functions form anothe file
sayHi('susan')
sayHi(john)
sayHi(peter)

require('./7-mind-grenade')