const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;

var command = process.argv[2];

console.log(command);
console.log('Yargs',argv);
debugger;
if (command === 'add') {
  console.log("adding new note")
  notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
  console.log("listing nodes");
  notes.getAll();
} else if(command === 'read') {
  console.log("read note")
  notes.readNote(argv.title);
} else if(command === 'remove') {
  console.log("remove node")
  notes.removeNote(argv.title);
}
else {
  console.log("command not recognized");
}
