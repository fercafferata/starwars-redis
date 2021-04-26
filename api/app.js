//incluimos redis a nuestro script
var redis = require('redis');
var express = require('express');
const { json } = require('express');
var app = express()
var port = 3000 
//creamos un cliente
var redisClient = redis.createClient(6379, 'db-redis');
app.set('port', port)

redisClient.on('connect', function(){
    console.log('Conectando a Redis Server');
});
/*
redisClient.set("key1", "hola mundo1");
redisClient.set("key2", "hola mundo2");
redisClient.set("key3", "hola mundo3");

redisClient.get("key1", function(err, value){
    // retornara null si la key no existe
    console.log(value);
});

redisClient.exists("key", function(err, reply) {
    if(err != null){
        //error
    }
});

redisClient.lpush("key4", "val1", "val2", "val3", "val4");

redisClient.lrange("key4", 0, -1, function(err, values) {
    console.log(values);
});
*/

app.get('/', function(req, res) {
    redisClient.lrange('personajes', 0, -1, function(err, values){
        res.send(JSON.stringify(values))
    })
})

app.get('/cargarPersonajes', function(req, res) {
    redisClient.lpush(req.params("episodio"), [req.params("personajes")])
    res.send("CARGADO")
})

app.get('/listar', function(req, res){
    redisClient.lrange(req.params("episodio"), 0, -1, function(err, values) {
        res.send(JSON.stringify(values))
    })
})

app.listen(app.get('port'), (err) => {
    console.log(`Server running on port ${app.get('port')}`)
})

