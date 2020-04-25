// FS module

console.log("Starting app.");

const fs = require("fs");

fs.appendFile("greetings.txt", "Hello", err => {
    if(err) {
        console.log("Unable to write to file");
    }
    console.log("Write to file")
});

// OS modules

const os = require("os");

const user = os.userInfo()

console.log(user);