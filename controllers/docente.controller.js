const Docente = require('../models/docente')
const docenteCtrl = {}

docenteCtrl.ObtenerDocentes = async (req, res) => {
    const docentes = await Docente.find().where('estado').equals(1)
        .then((docentes) => {
            res.json({
                status: "ok",
                data: docentes
            })
        })
        .catch((err) => {
            res.json({
                status: "error",
                message: err
            })
        })
}

docenteCtrl.ObtenerDocente = async (req, res) => {
    const docente = await Docente.findById(req.params.id).where("estado").equals(1)
        .then((docente) => {
            if (docente) {
                res.json({
                    status: "ok",
                    codigo: "1",
                    data: docente
                })
            } else {
                res.json({
                    status: "ok",
                    codigo: "2",
                    data: "No se encontro"
                })
            }
        })
        .catch((err) => {
            res.json({
                status: "error",
                codigo: "0",
                data: "docente no registrado"
            })
        })
    res.json(docente)
}

docenteCtrl.ActualizarDocente = (req, res) => {
    const { id } = req.params
    const { body } = req
    const docente = {
        nombre: body.nombre,
        apellido: body.apellido,
        edad: body.edad,
        salario: body.salario,
        perfil: body.perfil
    }
    Docente.findOneAndUpdate(id, { $set: docente })
        .then(() => {
            res.json({
                status: "ok",
                codigo: "1",
                message: "Docente actualizado"
            })
        })
        .catch(err => {
            res.json({
                status: "error",
                codigo: "0",
                message: "Ocurrio un error"
            })
        })
}

docenteCtrl.CrearDocentes = async (req, res) => {
    const docente = new Docente(req.body)
    await docente.save()
        .then(() => {
            res.json({
                status: 'ok',
                codigo: '1',
                message: 'docente registrado'
            })
        })
        .catch(err => {
            res.json({
                status: "error",
                codigo: "0",
                message: "Ocurrio un error"
            })
        })
}

docenteCtrl.EliminarDocente = (req, res) => {
    const { id } = req.params
    const docente = {
        estado: -1
    }
    Docente.findOneAndUpdate(id, { $set: docente })
        .then(() => {
            res.json({
                status: 'ok',
                codigo: '1',
                message: 'docente registrado'
            })
        })
        .catch(err => {
            res.json({
                status: "error",
                codigo: "0",
                message: "Ocurrio un error"
            })
        })
}

module.exports = docenteCtrl