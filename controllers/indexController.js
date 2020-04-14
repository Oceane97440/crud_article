//Connetion bdd mongoclient
var mongoose = require('mongoose');
const Article = require("../models/shemas");

var controller = {};


mongoose.connect("mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/articles?retryWrites=true&w=majority", {
    useNewUrlParser: true
  }, () =>

  console.log("BDD CONNECTER")
);


//Chemain vers liste articles

controller.index = (req, res) => {
  //Chemain vers l'affichage du formulaires

  Article.find(function (err, articles) {

    res.render('index.ejs', {
      articles: articles
    });
  });
};

//Chemain vers vue article en detail
controller.detail = (req, res) => {

  Article.findById(req.params.id, function (err, article) {

    console.log(article)

    res.render('detail.ejs', {
      article: article
    });

  });

};

//Chemain vers l'affichage du formulaires

controller.ajout = (req, res) => {

  res.render('form.ejs');
};

// 1 Chemain vers affichage de article selectionner
controller.edit = (req, res) => {

  Article.findById(req.params.id, function (err, article) {

    console.log(article)

    res.render('form_edit.ejs', {
      article: article
    });

  });


}

// 2 Apres ajout du nouveau contenu et la modif
controller.update = (req, res) => {

  Article.updateOne({
      _id: req.params.id
    }, {
      ...req.body,
      _id: req.params.id
    })

    .then(res.redirect('/'))

    .catch(error => res.status(400).json({
      error
    }));

};



// Suppression
controller.supprime = (req, res) => {

  Article.deleteOne({
    _id: req.params.id
  }, function (err, articles) {

    console.log(articles)

    res.render('index.ejs', {
      articles: articles
    });

  });


};



//Sauvegarde les données
controller.save = (req, res) => {

  console.log(req.body);

  console.log(req.files);


  //new Article=nom du model dans schemas.js
  //var nom_donnée=....(1)
  var articles = new Article({

    titre: req.body.titre,
    contenus: req.body.contenus,
    parution: req.body.parution,
    photo: req.files.photo.name,




  });
  let sampleFile = req.files.photo;

  sampleFile.mv(mainDir + '/public/uploads/' + sampleFile.name, function (err) {
    if (err)
      return res.status(500).send(err);

  });

  //Nous stockons l'objet en base
  //artcles=var articles au nom_donnée (2)
  articles.save(function (err) {
    if (err) {
      res.send(err);
    }

    return res.redirect('/');

  })


};




//Important pour export
module.exports = controller;