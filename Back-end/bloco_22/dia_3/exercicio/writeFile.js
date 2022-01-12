const fs = require('fs');

const writeFile = (path, content) => {
    try {
        fs.writeFileSync(path, content, {encoding: 'utf-8'})
        return 'ok'
    } catch(e) {
        return e.message
    }
}

module.exports = writeFile;