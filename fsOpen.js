var fs = require('fs');

//create an empty file named newfile.txt:
fs.open('newfile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
