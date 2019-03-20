const Docente = require('../models/docente')
const docenteCtrl = {}

docenteCtrl.ObtenerDocentes = async (req,res) => {
    const docentes = await Docente.find()
    res.json(docentes)
        
}

docenteCtrl.ObtenerDocente = async (req,res) => {
    const docente = await Docente.findById(req.params.id)
    res.json(docente)
}

docenteCtrl.ActualizarDocente = (req,res) => {
    const {id} = req.params
    const {body} = req
    const docente = {
        nombre: body.nombre,
        apellido: body.apellido,
        edad: body.edad,
        salario: body.salario,
        perfil: body.perfil
    }
    Docente.findOneAndUpdate(id, {$set:docente})
        .then(response => console.log("ok",response))
        .catch(err => console.error("error",err))
    // res.json({status: "Docente actualizado"})
}

docenteCtrl.CrearDocentes = async (req, res) => {
    const docente = new Docente(req.body)
    await docente.save();
    res.json({
        'status': 'docente registrado'
    })
}

docenteCtrl.EliminarDocente = () => {

}

module.exports = docenteCtrl