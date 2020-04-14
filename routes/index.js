const router = require('express').Router();

const indexController = require('../controllers/indexController')
//protéction identification du token
//const auth = require('../middleware/auth');



//Racine du projet
router.get('/',indexController.index);

//Ajout article
router.get('/ajout', indexController.ajout);
router.post('/add', indexController.save);

//Voir l'article
router.get('/detail/:id', indexController.detail);

//Modif l'article
router.get('/edit/:id', indexController.edit);
router.post('/edit/:id', indexController.update);

//Supprimer
router.get('/delete/:id', indexController.supprime);


module.exports = router;