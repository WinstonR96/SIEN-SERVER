const Docente = require('../models/docente')
const docenteCtrl = {}

docenteCtrl.ObtenerDocentes = async (req,res) => {
    const docentes = await Docente.find()
    res.json(docentes)
        
}

docenteCtrl.ObtenerDocente = (req,res) => {
    console.log(req.params);
    res.json({
        status:"recibido"
    })
}

docenteCtrl.ActualizarDocente = () => {

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