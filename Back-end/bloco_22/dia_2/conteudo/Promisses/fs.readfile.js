const fs = require('fs');

const readFilePromisse = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, content) => {
            if (err) return reject(err);
            resolve(content);
        })
    })
}

readFilePromisse('./file.txt')
    .then(content => console.log(content.byteLength))
    .catch(error => console.log(error.message))