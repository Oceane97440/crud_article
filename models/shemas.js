//Importation du module mongoose
const mongoose = require("mongoose");

//Créaction du schema

const Article =  mongoose.Schema({
    titre: { type: String, required: true },
    contenus: { type: String, required: true },
    parution: { type: Date, default: Date.now },
    photo: String,

  });

  

  module.exports = mongoose.model("articles", Article);
  //Nom de la collection > articles