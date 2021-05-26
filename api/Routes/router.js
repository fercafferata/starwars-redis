const express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/cargar', (req, res) => {
    res.render('cargar')
})

router.get('/listar', (req, res) => {
    res.render('listar')
})

router.get('/eliminar', (req, res) => {
    res.render('eliminar')
})

module.exports = router;