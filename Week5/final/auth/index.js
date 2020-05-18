const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();

// parse application/json
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to the API"
    })
})

// Auth
app.get("/api/login", (req, res) => {
    // Ovdje bi trebalo da se iz requesta prihvati username i password
    // Da se provjeri u bazi ima li takvog korisnika
    // Ako je sve proslo ispravno i korisnik je usjesno pronadjen u bazi sa proslijedjenim
    // podacima, onda izvucemo informacije o njemu iz baze
    // Mi cemo ovdje imati nekog Mock usera
    const user = {
        id: 1,
        username: "Korisnik",
        email: "korisnik@gmail.com"
    };

    // dokumentacija za JWT
    // Sinhrono ili asinhrono moze
    // Mi cemo asinhrono

    jwt.sign({ user }, "secretkey", { expiresIn: "1h" }, (err, token) => {
        res.json({
            token
        })
    });
})

// Authenticated route
app.post("/api/posts", verifyToken, (req, res) => {
    // Mozemo da radimo request dok god imamo u headeru validan token

    jwt.verify(req.token, "secretkey", (err, authData) => {
        console.log(req.body)
        const name = req.body.name || "Default";
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "Post created",
                name
            })
        }
    })

})

// TOKEN FORMAT
// Authorization: Bearer <accesss_token>

// Verify token
// Middleware funckija
function verifyToken(req, res, next) {
    // Get auth header value- zato sto se kroz Header salje token
    const bearerHeader = req.headers["authorization"];
    console.log(typeof bearerHeader);
    // check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
        // Split at space
        const bearer = bearerHeader.split(" ");
        // get token
        const bearerToken = bearer[1];
        // set token
        req.token = bearerToken;
        next();
    } else {
        // Forbidden
        console.log('error');
        res.sendStatus(403);
    }

}

app.listen(5000, () => {
    console.log("Server started on 5000");
});