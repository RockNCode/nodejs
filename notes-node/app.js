console.log("Start");
const fs = require('fs');
const os = require('os');

console.log(os.userInfo());
var user = os.userInfo();
fs.appendFile('greetings.txt',  `Hello  ${user.username} !` , function (err) {
        if(err) {
            console.log("Unable to write file");
        }
} );