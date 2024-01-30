const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Requête .GET sur l'URL racine (/) pour renvoyer un flux JSON
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

// Configuration de l'application pour qu'elle écoute sur le port défini
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
