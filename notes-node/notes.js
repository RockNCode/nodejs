console.log("Starting nodes.js");

var addNote = (title,body) => {
    console.log("Adding note ", title, body);
};

var getAll = () => {
  console.log("getting all");
}

var readNote = (title) => {
  console.log("Reading note : ", title);
}
var removeNote = (title) => {
  console.log("Removing note : ", title)
}
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
