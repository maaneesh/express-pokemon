const express = require("express");
const app = express();
const port = 5002;

const pokemon = require("./models/pokemon")

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Pokemon App!</h1>
    `);
});

app.get("/pokemon", (req, res) => {
  res.render("Index",{
    pokemons: pokemon
  });
});
app.get("/pokemon/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
