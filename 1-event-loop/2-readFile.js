const { readFile } = require('fs')

console.log("task is starting");

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed first task');
})

console.log('starting next task');