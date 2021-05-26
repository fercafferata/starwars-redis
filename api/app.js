const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const hbs = require('hbs');
const path = require('path');

const routes = require('./Routes/router');

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'views')))

app.use(routes);


app.listen(port)
console.log('Escuchando');