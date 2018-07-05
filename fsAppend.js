var fs = require('fs');

// create new file
fs.appendFile('newfile.txt', 'Hello content', function (err) {
    if (err) throw err;
    console.log('Saved!');
});