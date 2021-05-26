var express = require('express');
var port = process.env.PORT || 3000
var app = express();
var ejs = require('ejs')
var path = require('path')
app.set('port', port)

const routes = require('./Routes/routes');


/*
redisClient.set('key1', 'Hola1');
redisClient.set('key2', 'Hola2');
redisClient.set('key3', 'Hola3');
redisClient.get('key1', function(err, value){
    //retorna null si la key no existe
    console.log(value);
});*/


/*
redisClient.exists(key, function(err, reply){
    if(err != null){
        //error
    }
});
*/

/*
redisClient.lpush('key4', 'val1', 'val2', 'val3', 'val4');
redisClient.lrange('key4', 0, -1, function(err, values){
    console.log(values);
});
*/


//redisClient.lpush("personajes", "luke", "yoda", "han", "chewbacca", "leia", redis.print)
/*
redisClient.lrange("personajes", 0, -1, function(err, value){
    console.log(value);
    for (var i in value){
        console.log(value[i]);
    }
});
*/

app.set('port', 3000);
app.set('views', 'ejs')

app.use(express.static(__dirname + '/Templates/index'));

// Punto A - Cargar nuevo personaje a la lista
app.get('/cargar/:episodio/:nombre', function(req, res){
    redisClient.lpush(req.params.episodio, req.params.nombre)
    res.send('Carga lista')
});


// Punto B - Quitar los personajes de un episodio
app.delete('/quitar/:episodio/:nombre', function(req, res){
    redisClient.lrem(req.params.episodio, 0, req.params.nombre)
    res.send('Personaje eliminado')
});

app.use(routes);

app.listen(app.get('port'), (err) => {
    console.log("Servidor corriendo en puerto 3000");
})