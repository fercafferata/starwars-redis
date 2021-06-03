const express = require('express');
var router = express.Router();

//  const redis = require('redis');
//  const redisClient = redis.createClient(6379, 'db-redis');

//  redisClient.on('connect', () => {
//      console.log(`Connected to Redis's server`);
//  })

{
episodios = [
    'La amenaza fantasma', 
    'El ataque de los clones',
    'La venganza de los Sith', 
    'Una nueva esperanza', 
    'EL imperio contraataca',
    'EL regreso de los Jedi',
    'EL despertar de la fuerza',
    'Los ultimos Jedi',
    'El ascenso de Skywalker'
]
}

router.get('/', (req, res) => {
    res.render('index', {episodios})
})


router.get('/cargar', (req, res) => {
    res.render('cargar', {episodios})
})

router.get('/listar', (req, res) => {
    res.render('listar', {episodios})
})

router.get('/eliminar', (req, res) => {
    res.render('eliminar', {episodios})
})

/*
app.get('/', function(req, res){
    redisClient.keys('*', function(err, keys){
        res.send('Lista de episodios: ' + JSON.stringify(keys))
    })
});

// Punto A - Cargar nuevo personaje a la lista
app.get('/cargar/:episodio/:nombre', function(req, res){
    redisClient.lpush(req.params.episodio, req.params.nombre)
    res.send('Carga lista')
});

// Punto C - Listar los personajes de un determinado episodio
app.get('/listar/:episodio', function(req, res){
    redisClient.lrange(req.params.episodio, 0, -1, function(err, values){
        res.send(JSON.stringify(values))
    });
});

// Punto B - Quitar los personajes de un episodio
app.get('/quitar/:episodio/:nombre', function(req, res){
    redisClient.lrem(req.params.episodio, 0, req.params.nombre)
    res.send('Personaje eliminado')
});
*/
module.exports = router;