console.log("Start");
const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

// console.log( _.isString(true) );
// console.log( _.isString("Hello"));

console.log(_.uniq([1,1,2,2,3,3,4,4,5,5]));

// console.log(os.userInfo());
// var user = os.userInfo();
// fs.appendFile('greetings.txt',  `Hello  ${user.username} !` , function (err) {
//         if(err) {
//             console.log("Unable to write file");
//         }
// } );
//
// console.log(notes.add(24,7));
