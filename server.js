require("dotenv").config();

const express = require("express");
const app = express();
const port = 5007;
// const pokemon = require("./models/pokemon");

 const Pokemon = require("./models/pokemon");

//SETTING UP MONGOOSE
const mongoose = require("mongoose");

//mongoose connection
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
});


app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//middleware

app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Pokemon App!</h1>
    <a href='/pokemon'>Pokemon</a>
    `);
});

//Index
app.get("/pokemon", async (req, res) => {
  const foundPokemon = await Pokemon.find({})
  res.render("Index", {
    pokemons: foundPokemon,
  });
});

//New
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//CREATE = POST

app.post("/pokemon", async (req, res) => {
  console.log(req.body);
  const createdPokemon = await Pokemon.create(req.body);
  console.log(createdPokemon);
  res.redirect("/pokemon");
});
//Show
app.get("/pokemon/:id", async (req, res) => {
  const onePokemon = await Pokemon.findById(req.params.id);
  res.render("Show", {
    Pokemon: onePokemon,
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
