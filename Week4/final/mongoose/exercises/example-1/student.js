const mongoose = require("mongoose");
const student = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            unique: true
        },
        lastName: String,
        grade: Number,
        info: {
            school: {
                type: String
            }
        },
        favFoods: [{ type: String }],

    },
    { timestamps: true }
);

// Kreiranje kolekcije, ako je nema
// mongoose convert student -> students
const StudentModel = mongoose.model("student", student);
module.exports = StudentModel