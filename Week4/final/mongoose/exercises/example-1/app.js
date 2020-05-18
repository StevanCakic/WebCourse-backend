const mongoose = require("mongoose");
const Student = require("./student");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/ex1");
};


connect()
  .then(async connection => {
    const student = await Student.create({
      firstName: "Tim",
      lastName: "Cook",
      grade: 10
    });
    const found = await Student.find({ firstName: "Tim" });
    const findAll = await Student.find({});
    console.dir(student);
  })
  .catch(e => console.error(e));
