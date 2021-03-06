const mongoose = require('mongoose')
const { Schema } = mongoose

const DocenteSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    salario: {type: Number, required: true},
    perfil: {type: String, required: true},
    estado: {type: Number, required: true, default: 1}
})

module.exports = mongoose.model("Docente", DocenteSchema);