var express = require('express');
var router = express.Router();
const exerciseCtrl = require('../controllers/exercises')

/* GET users listing. */
router.get('/', exerciseCtrl.index);

//Get form
router.get('/new', exerciseCtrl.new);

router.get('/:id', exerciseCtrl.show);

router.post('/', exerciseCtrl.create);

router.get('/:id/edit', exerciseCtrl.edit);

router.put('/:id', exerciseCtrl.update);

router.delete("/:id", exerciseCtrl.delete);

module.exports = router;

