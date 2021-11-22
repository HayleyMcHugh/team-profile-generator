const fs = require('fs');

const writeToFile = appContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', appContent, err => {
            if (err) {
                reject(err);

                return;
            }
            resolve({
                    ok: true,
                    message: 'Your file was created!'
            })
        })
    })
}

module.exports = writeToFile