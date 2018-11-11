const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let generosValores = {
    values: ['M', 'F'],
    message: '{VALUE} no es un género válido'
};

let personaSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'El nombre es requerido']
    },
    apellidos: {
        type: String,
        required: [true, 'Los apellidos son requeridos']
    },
    dpi: {
        type: String,
        required: false
    },
    nacimiento: {
        type: Date,
        default: Date.now,
        required: [true, 'La fecha de nacimiento es requerida']
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono es requerido']
    },
    direccion: {
        type: String,
        required: [true, 'La dirección es requerida']
    },
    genero: {
        type: String,
        enum: generosValores,
        required: [true, 'El género es requerido']
    }
});

module.exports = mongoose.model('Persona', personaSchema);