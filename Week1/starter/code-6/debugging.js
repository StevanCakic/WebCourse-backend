function updateName(obj, newName) {
    obj.name = newName;
}

const person = {
    name: "marko"
}

person.age = 25

debugger
updateName(person, "milos")
person.name = "mirko"
console.log(person)