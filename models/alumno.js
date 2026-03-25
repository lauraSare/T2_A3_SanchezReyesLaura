const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    numControl: { type: String, required: true },
    nombre:     { type: String, required: true },
    primerAp:   { type: String, required: true },
    segundoAp:  { type: String },
    fechaNac:   { type: String },
    semestre:   { type: Number, min: 1, max: 15 },
    carrera:    { type: String }
});

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;