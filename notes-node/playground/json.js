const fs = require('fs');

var originalNote = {
    title : 'Some title',
    body : 'some body'
};

fs.writeFileSync('notes.json',JSON.stringify(originalNote));

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
