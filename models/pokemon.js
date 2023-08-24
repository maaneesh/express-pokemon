const { default: mongoose, Schema } = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
   img: {
    type: String,
   }

});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon