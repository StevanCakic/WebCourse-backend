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
  
  // Treba preskociti ac polje kad se radi insert!
  const u = "UPDATE Persons SET City = 'london' WHERE City = 'podgorica'";

  con.query(u, function (err, result) {
    if (err) throw err;
    console.log("Result");
    console.log(result);
  });

});
