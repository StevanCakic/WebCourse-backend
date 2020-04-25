const fs = require("fs");

function fetchNotes() {
    try {
        const notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    } catch(e) {
        console.log(e);
        return [];
    }
}

function saveNotes(notes) {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes))
}

function logNote(note) {
    console.log("----------")
    console.log("Naslov:" + note.title);
    console.log("Sadrzaj:" + note.body)
}

function addNote(title, body) {

    const note = {
        title,
        body
    }
    let notes = fetchNotes();
    // Da li note koji unosimo vec postoji
    const duplicateNotes = notes.filter(note => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        return false;
    }
}

function getAll() {
    return fetchNotes()
}



function getNote(title) {
    const notes = fetchNotes();
    const filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0];
    
}

function removeNote(title) {
    const notes = fetchNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);
    return filteredNotes.length < notes.length;
}

module.exports = {
    logNote,
    getAll,
    getNote,
    addNote,
    removeNote
}
