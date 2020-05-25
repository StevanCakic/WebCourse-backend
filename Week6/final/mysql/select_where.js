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
    const q1 = `SELECT * FROM Persons WHERE LastName='markovic'`;
    const q2 = `SELECT * FROM Persons WHERE LastName LIKE 'ma%'`;
    // Ako u upitu dodajete varijablu obavezno koristiti mysql.escape(adr)
    const firstname = "milos";
    const q3 = "SELECT * FROM Persons WHERE FirstName=" + mysql.escape(firstname);

    const city = "Podgorica";
    const q4 = 'SELECT * FROM Persons WHERE FirstName = ? OR City = ?';

    const q5 = 'SELECT * FROM Persons ORDER BY LastName DESC LIMIT 3'
    con.query(q5, function (err, result) {
        if (err) throw err;
        console.log("All persons");
        console.log(result);
    });


});
