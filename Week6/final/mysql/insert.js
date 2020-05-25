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
  // Create table
  const createTable = `CREATE TABLE IF NOT EXISTS Persons (
    PersonID int(11) NOT NULL auto_increment,
    LastName varchar(255) ,
    FirstName varchar(255),
    Address varchar(255) DEFAULT '',
    City varchar(255),
    PRIMARY KEY (PersonID)
  );`
  // Treba preskociti ac polje kad se radi insert!
  const insertInTable = `INSERT INTO Persons (LastName, FirstName, Address, City)
   VALUES ?`
  const person = [["milic", "milos", "adresa 2", "podgorica"]];

  con.query(insertInTable, [person], function (err, result) {
    if (err) throw err;
    console.log("Result");
    console.log(result);
  });

});
