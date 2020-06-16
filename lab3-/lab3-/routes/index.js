'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/Vlad', (req, res) => {
    res.render('Vlad', { title: "Vladyslav Serdiuk" });
});

router.get('/Natalia', (req, res) => {
    res.render('Natalia', { title: "Natalia Serdiuk" });
});

router.get('/Igor', (req, res) => {
    res.render('Igor', { title: "Igor Serdiuk" });
});

module.exports = router;
