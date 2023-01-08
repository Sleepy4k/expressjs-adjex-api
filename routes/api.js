var router = require('express').Router();
var directory = require('../config/path');

/* Import Controller. */
var adjectiveController = require(`../app/http/${directory.controller}/AdjectiveController`);

/* GET landing listing. */
router.get('/', function (req, res, next) {
    res.send(res.__('greeting'));
});

/* GET adjectives listing. */
router.get('/adjective', adjectiveController.index);

/* GET spesific adjective listing. */
router.get('/adjective/:letter', adjectiveController.show);

module.exports = router;
