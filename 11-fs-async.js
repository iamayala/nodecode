const { readFile, writeFile } = require('fs')

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result
        writeFile('./content/third.txt',
            `Here is the new updated file: ${first} + ${second}.`, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('end');
            })
    })
})

console.log('next');
// console.log('next');