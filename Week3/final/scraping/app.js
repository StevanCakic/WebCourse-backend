const express = require("express");
const app = express();

const scrapVijesti = require("./scraper");

app.get("/latest", async function (req, res) {
  const result = await scrapVijesti();
  res.send(result)
  
})

app.listen(3000, (err, data) => {
  if (!err) console.log("Connected")
})

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});