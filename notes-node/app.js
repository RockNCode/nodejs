console.log("Start");
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log(os.userInfo());
var user = os.userInfo();
fs.appendFile('greetings.txt',  `Hello  ${user.username} !` , function (err) {
        if(err) {
            console.log("Unable to write file");
        }
} );

console.log(notes.add(24,7));