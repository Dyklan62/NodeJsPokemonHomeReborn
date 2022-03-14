const express = require("express");
const bodyParser = require("body-parser");
const UserApi = require("./src/Routes/user.routes");
const PokemonApi = require("./src/Routes/pokemon.routes");

const app = express();
const config = require("./config.js");

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("NodeJs Back Works, env: " + config.NODE_ENV);
});

//oute back des requetes appartenant a user
app.use("/api/user", UserApi);
//route back des requetes appartenant aux pokemon
app.use("/api/pokemon", PokemonApi);

app.listen(config.PORT, () => {
  console.log(`App listening at http://localhost:${config.PORT}`);
});
