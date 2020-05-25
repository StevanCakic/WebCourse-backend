const mysql = require('mysql');

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "DB"
});


con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const q = `SELECT FirstName,LastName FROM Persons`
 // Ako zelimo samo ime i prezime
 // SELECT FirstName,LastName FROM Persons
  con.query(q, function (err, result) {
    if (err) throw err;
    console.log("All persons");
    console.log(result);
  });

});
