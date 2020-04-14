const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


const userShema =  mongoose.Schema({

    email: { type: String, required: true, unique: true },//unique permet d'avoir un mail unique dans la bdd
    password: { type: String, required: true }

  });

  userShema.plugin(uniqueValidator); //evite à mongoose d'avoir des erreur


  module.exports = mongoose.model("users", userShema); //importation du shemas en model

  //Nom de la collection > users