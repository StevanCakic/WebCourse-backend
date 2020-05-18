const Todo = require("./todo_model");
function findById(id) {
    return new Promise((resolve, reject) => {
        try {
            console.log(id)
            resolve(Todo.findById(id).exec())
        } catch (e) {
            console.log(e);
            reject(false)
        }

    })
}

function findAll() {
    return new Promise((resolve, reject) => {
        try {
            resolve(Todo.find({}).lean().exec())
        } catch (e) {
            console.log(e);
            reject(false)
        }

    })
}

function create(todoToCreate) {
    return new Promise((resolve, reject) => {
        try {
            resolve(Todo.create(todoToCreate))
        } catch (e) {
            console.log(e);
            reject(false)
        }

    })
}

module.exports = {
    findById,
    findAll,
    create
}