const express = require("express");
const app = express();
const port = 5002;

const pokemon = require("./models/pokemon");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


//middleware

app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
app.use(express.urlencoded({extended:false}));



app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Pokemon App!</h1>
    `);
});

app.get("/pokemon", (req, res) => {
  res.render("Index", {
    pokemons: pokemon,
  });
});

//New
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});



app.get("/pokemon/:id", (req, res) => {
  res.render("Show", {
    pokemon: pokemon[req.params.id],
  })
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
