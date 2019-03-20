const express = require('express')
const router = express.Router();
const docenteCtrl = require('../controllers/docente.controller');

router.get('/docentes', docenteCtrl.ObtenerDocentes)
router.post('/docentes', docenteCtrl.CrearDocentes)
router.get('/docentes/:id', docenteCtrl.ObtenerDocente)
router.put('/docentes/:id', docenteCtrl.ActualizarDocente)
router.post('/docentes/:id', docenteCtrl.EliminarDocente)



module.exports = router