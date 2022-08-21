const fs = require('fs');
const process = require('process');

console.log(process.argv);
function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        console.log('data... ', data);
    })
}
cat(process.argv[2]);