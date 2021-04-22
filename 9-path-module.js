const path = require('path')

console.log(path.sep);

const filePath = path.join('./content', 'subfolder', 'text.txt')
console.log(filePath);

// displays the base file of the project
const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text')
console.log(absolute);