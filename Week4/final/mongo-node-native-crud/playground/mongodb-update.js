const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.", err);
    }

    console.log("Connect to MongoDB server.");

    db.collection("Todos")
        .findOneAndUpdate({
            _id: new ObjectID("5ec1769f0ea98311083dc8d0")
        }, {
            $set: {
                completed: true
            }
        }, {
            // vraca azuirani dokument,
            // default je true, vraca originalni dokument
            returnOriginal: false
        })
        .then(result => {
            console.log(result)
        })

    // Azurirati ime korisnika na neko koje vi zadate
    // povecati vrijednost age za 1
    // pogledati dokumentaciju
    db.collection("Todos")
        .findOneAndUpdate({
            _id: new ObjectID("5ec1769f0ea98311083dc8d0")
        }, {
            $inc: {
                age: 2
            }
        }, {
            // vraca azuirani dokument,
            // default je true, vraca originalni dokument
            returnOriginal: false
        })
        .then(result => {
            console.log(result)
        })

    db.close();

})

