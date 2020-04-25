const fs = require("fs");
const os = require("os");
const user = os.userInfo()
console.log(user)

fs.appendFile("greetings.txt", `Hello ${user.username}\n` , error => {
    if(error){
        console.log("Nije moguce upisati sadrzaj u fajl");
    }
    console.log("Uspjesan upis u fajl")
})


