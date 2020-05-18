const mongoose = require("mongoose")
const school = new mongoose.Schema({
    name: String,
    openSince: Number,
    students: Number,
    isGreat: Boolean,
    staff: [{ type: String }]
});

module.exports = mongoose.model("school", school);