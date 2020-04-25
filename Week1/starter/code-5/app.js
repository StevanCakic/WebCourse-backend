const obj = {
    name: "Marko"
};

const stringObj = JSON.stringify(obj);
console.log(typeof stringObj)
console.log(stringObj);

const personString = '{"name":"Ime", "age":25}'
console.log(JSON.parse(personString))

const fs = require("fs");
const originalNote = {
    title: "Naslov 1",
    body:"Sadrzaj za note"
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

const noteString = fs.readFileSync("notes.json");
const note = JSON.parse(noteString)
console.log(note);