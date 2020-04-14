const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const path = require('path');

//const user = require('./routes/user');
const index = require('./routes/index');



mongoose.connect("mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/articles?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

  }, () =>

  console.log("BDD CONNECTER")
);

const app = express();
mainDir = __dirname;


//Indique qu'on utilise express ejs
app.set('views', __dirname + '/views');
app.set('views engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));


//Chemain vers index.js
app.use('/', index)

//Chemain vers user.js
//app.use('/user', user)




//Action upload du fichier image
app.post('/uploads', function (req, res) {
  console.log(req.files.photo); //requette.files.nom du file 


});
app.use(fileUpload({
  limits: {
    fileSize: 50 * 1024 * 1024
  },
}));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: 'C:\tmp' //dossier temporaire
}));


app.set("port", process.env.PORT || 3000);



app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});