var express = require('express');
var router = express.Router();
const apiCtrl = require('../controllers/apis')

//Get user input + searches API for corresponding value
router.get('/', apiCtrl.index);

//adding exercise from API to mongoDB
// router.post('/', apiCtrl.create);

module.exports = router;