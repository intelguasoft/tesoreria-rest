const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    persona_id: {
        type: Number,
        required: [true, 'El nombre es necesario.']
    },
    email: {
        type: String,
        set: () => this.email.toLowerCase(),
        required: [true, 'El correo electronico es obligatorio.']
    },
    password: {
        type: String,
        required: [true, 'El correo electronico es obligatorio.']
    },

});

module.exports = mongoose.model('Usuario', usuarioSchema);