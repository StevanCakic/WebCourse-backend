const yargs = require("yargs");

const notes = require("./notes")
/*
const argv = yargs.argv;
const command = argv._[0];
*/

const titleOptions = {
    describe: "Title of note",
    demand: true,
    alias: "t"
}

const bodyOptions = {
    describe: "Content of note",
    demand: true,
    alias: "b"
}

const argv = yargs
    .command("add", "Add a new note", {
        title: titleOptions,
        body: bodyOptions
    })
    .command("list", "List all notes")
    .command("read", "Read a note", {
        title: titleOptions
    })
    .command("remove", "Remove a note", {
        title: titleOptions
    })
    .help().argv;


const command = argv._[0];
// console.log(command)
// console.log(argv.title);
// console.log(argv.body)

if (command === "add") {
    if (argv.title !== "" && argv.body !== "") {
        const note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log("Zapis kreiran!");
            notes.logNote(note)
        } else {
            console.log("Zapis sa unijetim naslovom vec postoji!");
        }
    }

} else if (command === "list") {
    const allNotes = notes.getAll();
    console.log(`Stampa ${allNotes.length} zapisa:`);
    allNotes.forEach(note => {
        notes.logNote(note);
    });
} else if (command === "read") {
    const note = notes.getNote(argv.title);
    if (note) {
        console.log("Zapis pronadjen");
        notes.logNote(note);
    } else {
        console.log("Zapis nije pronadjen")
    }
} else if (command === "remove") {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? "Zapis je obrisan" : "Zapis nije pronadjen"
    console.log(message);
} else {
    console.log("Komanda nije pronadjena.")
}