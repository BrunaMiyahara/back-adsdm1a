const express  = require('express');

const app = express();

app.get("/", function(req, res) {
    res.send("Você fez uma requisição GET");
});

app.post("/", function(req, res) {
    res.status(201).send("Você fez uma requisição POST");
});

app.put("/", function(req, res) {
    res.json({message: "Você fez uma requisição PUT"});
});
  
  app.delete("/", function(req, res) {
      res.status(204).end();
});

app.listen(3000, function() {
    console.log("API está ON!");
});

module.exports = app;