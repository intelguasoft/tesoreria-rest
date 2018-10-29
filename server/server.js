require('./config/config');

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

//parseamos la data application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parseamos la data application/json
app.use(bodyParser.json());

app.use(require('./controllers/home'));
app.use(require('./controllers/usuarios'));
app.use(require('./controllers/personas'));

mongoose.connect('mongodb://localhost:27017/tesoreria', (err, res) => {

    if (err) throw err;

    console.log("Base de datos 'Online'");

});

app.listen(process.env.PORT, () => {

    console.log(`Escuchando el puerto: ${process.env.PORT}`);

});