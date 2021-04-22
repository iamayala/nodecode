const { readFileSync, writeFileSync } = require('fs')

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first);
// console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the ${first}, ${second}`, { flag: 'w' }
)

console.log('end');
console.log('end');