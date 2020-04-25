// Yargs
const yargs = require("yargs");

const notes = require("./notes");

// const argv = yargs.argv;
// console.log(argv)
// const command = process.argv[2];
// const command = argv._[0]; // isto kao prethodna linija ali sada koristimo yargs

// console.log("Command: ", command);
// console.log("Process argv: ", process.argv);
// console.log("Yargs: ", argv); // Uncomment kad dodjemo na yargs


const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

const bodyOptions = {
  describe: "The body of the note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "Remove a note from notes", {
    title: titleOptions
  })
  .help().argv;

// const argv = yargs.argv;
const command = argv._[0];

if (command === "add") {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title already created");
  }
} else if (command === "list") {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => {
    notes.logNote(note);
  });
} else if (command === "read") {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command not found");
}
