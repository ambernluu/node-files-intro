const fs = require('fs');
const path = 'one.txt';

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log('ERROR', err);
            process.kill(1);
        }
        console.log('data... ', data);
    })
}
cat();