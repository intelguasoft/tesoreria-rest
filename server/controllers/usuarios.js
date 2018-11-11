const express = require('express');
const app = express();

const bcrypt = require('bcrypt');

const bodyParser = require('body-parser');

//parseamos la data application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parseamos la data application/json
app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
    res.json({
        mensaje: "get-usuarios",
        ok: true
    });
});

app.get('/usuarios/:id', (req, res) => {

    let id = req.params.id;
    res.json({
        mensaje: "get-usuarios",
        usuario: id,
        ok: true
    });
});

app.post('/usuarios', (req, res) => {

    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        })
    } else {
        res.json({
            mensaje: "post-usuarios",
            usuario: body,
            ok: true
        });
    }
});

app.put('/usuarios/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        mensaje: "put-usuarios",
        usuario: id,
        ok: true
    });
});

app.delete('/usuarios/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        mensaje: "delete-usuarios",
        usuario: id,
        ok: true
    });
});

module.exports = app;