require('./config/config');

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

//parseamos la data application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parseamos la data application/json
app.use(bodyParser.json());

app.use(require('./controllers/usuarios'));

app.get('/', (req, res) => {
    res.json({
        owner: "@intelguasoft",
        website: "https://www.intelguasoft.com",
        description: "Rest API para el control de tesorería de iglesia en base a ofrendas, promesas, ventas y demás entradas de dinero.",
        contact: {
            phone: "+502 5931 4660",
            email: "hnrdiaz@gmail.com",
            facebook: "/intelguasoft",
            twitter: "@intelguasoft"
        }

    });
});

mongoose.connect('mongodb://localhost:27017/tesoreria', (err, res) => {

    if (err) throw err;

    console.log("Base de datos 'Online'");

});

app.listen(process.env.PORT, () => {

    console.log(`Escuchando el puerto: ${process.env.PORT}`);

});