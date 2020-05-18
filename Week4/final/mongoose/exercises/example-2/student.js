const mongoose = require("mongoose")
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
        school: {
            // nesto kao foreign key
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "school"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("student", student);