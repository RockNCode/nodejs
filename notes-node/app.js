const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');

var command = process.argv[2];

console.log(command);
console.log(process.argv);

if (command === 'add') {
  console.log("adding new node")

} else if(command === 'list') {
  console.log("listing nodes");
} else if(command === 'read') {
  console.log("read node")
} else if(command === 'remove') {
  console.log("remove node")
}
else {
  console.log("command not recognized");
}
