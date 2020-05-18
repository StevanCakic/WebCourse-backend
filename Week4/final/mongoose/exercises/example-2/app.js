const mongoose = require("mongoose");
const Student = require("./student");
const School = require("./school");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/ex2");
};

connect()
  .then(async connection => {
    const school = await School.create({ name: "MIT" });
    const student = await Student.create({
      firstName: "Eva",
      school: school._id
    });
    // .populate() puni ref polja podacima
    // Kako radi .id ? Zbog virtuelizacije, mongoose pravi
    // virtuelno polje id, koje je _id !
    // Ovo je moguce samo nad mongoose objektima !
    // Kasnije pricamo o virtuelizaciji
    const match = await Student.findById(student.id)
      .populate("school")
      .exec();

    console.log(match);
    // Pokusa da nadje school cija je vrijednost kljuca name = MIT
    // ako je ne nadje, kreira novu skola cija je vrijenost drugi argument
    // upsert - ako podatak ne postoji, dodaj ga u kolekciju
    const schoolConfig = {
      name: "MITd",
      openSince: 1960,
      students: 1000,
      isGreat: true,
      staff: ["a", "b", "c"]
    };

    const schoolConfig2 = {
      name: "Stanfordd",
      openSince: 1940,
      students: 1500,
      isGreat: false,
      staff: ["v", "b", "g"]
    };

    const school2 = await School.findOneAndUpdate(
      { name: "MIT" },
      { name: "MIT" },
      { upsert: true, new: true }
    );

    const schools = await School.create([schoolConfig, schoolConfig2]);
    const match2 = await School.find({
      students: { $gt: 1200, $lt: 1600 },
      isGreat: false,
      staff: "b"
    })
      .sort({ openSince: 1 }) // -1 za descending
      .limit(2)
      .exec();

    console.log(match2);
    console.log(match3);
  })
  .catch(e => console.error(e));
