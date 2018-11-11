const express = require('express');
const app = express();

const Persona = require('../models/persona');

const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');

//parseamos la data application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parseamos la data application/json
app.use(bodyParser.json());

/**
 * Método para la obtención del listado de recursos
 * del tipo persona de una manera paginada.
 */
app.get('/personas', (req, res) => {

    let inicio = req.query.inicio || 0;
    inicio = Number(inicio);

    let porPagina = req.query.pp || 5;
    porPagina = Number(porPagina);

    Persona.find({})
        .skip(inicio)
        .limit(porPagina)
        .exec((err, personas) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: err
                });
            }

            Persona.count((err, total) => {
                res.json({
                    ok: true,
                    total: total,
                    personas
                });
            });
        });

});

app.get('/personas/:id', (req, res) => {

    let id = req.params.id;
    res.json({
        mensaje: "get-personas",
        persona: id,
        ok: true
    });
});

app.post('/personas', (req, res) => {

    let body = req.body;
    let persona = new Persona({
        nombre: body.nombre,
        apellidos: body.apellidos,
        dpi: body.dpi,
        nacimiento: body.nacimiento,
        telefono: body.telefono,
        direccion: body.direccion,
        genero: body.genero
    });

    persona.save((err, personaDb) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: err
            });
        }

        res.json({
            ok: true,
            persona: personaDb
        });

    });

});

app.put('/personas/:id', (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Persona.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, personaDb) => {
        if (err) {
            return res.status(404).json({
                ok: false,
                message: err
            });
        }

        res.json({
            ok: true,
            persona: personaDb
        });
    });

});

app.delete('/personas/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        mensaje: "delete-personas",
        persona: id,
        ok: true
    });
});

module.exports = app;